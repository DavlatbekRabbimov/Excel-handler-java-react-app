package excel.uz.server.service.impl;

import excel.uz.server.exception.error.ErrorException;
import excel.uz.server.service.FileHandlerService;
import excel.uz.server.store.DataStore;
import excel.uz.server.store.SheetSlider;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Path;
import java.util.ArrayList;

@Slf4j
@AllArgsConstructor
@Service
public class FileHandlerServiceImpl implements FileHandlerService {

    private final ErrorException errorException = new ErrorException();
    private final DataStore dataStore;
    private final SheetSlider sheetSlider;

    @Override
    public void handleFile(Path file) {
        File excelFile = new File(file.toFile().toURI());
        if (!excelFile.exists()) {
            throw errorException.errorLogic("Error: Excel file in not gotten from controller");
        }
        try (FileInputStream inputStream = new FileInputStream(excelFile)) {
            Workbook workbook = new XSSFWorkbook(inputStream);
            Sheet sheet = workbook.getSheetAt(sheetSlider.getNumber());
            int id = 0;
            for (Row row : sheet) {
                dataStore.add(id, new ArrayList<String>());
                for (Cell cell : row) {
                    dataTypeHandle(id, cell);
                }
                id++;
            }
        } catch (Exception e) {
            throw errorException.errorCatch("Error: File is not handled!", e);
        }
    }

    private void dataTypeHandle(int id, Cell cell) {
        switch (cell.getCellType()) {
            case STRING -> dataStore.getData().get(Integer.valueOf(id)).add(cell.getRichStringCellValue().getString());
            case NUMERIC -> {
                if (DateUtil.isCellDateFormatted(cell)) {
                    dataStore.getData().get(id).add(cell.getDateCellValue() + "");
                } else {
                    double numericCellValue = cell.getNumericCellValue();
                    numericCellValue = Math.round(numericCellValue * 10.0) / 10.0;
                    dataStore.getData().get(id).add(numericCellValue + "");
                }
            }
            case BOOLEAN -> dataStore.getData().get(id).add(cell.getBooleanCellValue() + "");
            case FORMULA -> {
                try {
                    double numericCellValue = cell.getNumericCellValue();
                    numericCellValue = Math.round(numericCellValue * 10.0) / 10.0;
                    dataStore.getData().get(id).add(numericCellValue + "");
                } catch (IllegalStateException e) {
                    dataStore.getData().get(id).add("Error evaluating formula: " + cell.getCellFormula());
                }
            }
            case BLANK -> dataStore.getData().get(id).add(" ");
            default -> dataStore.getData().get(Integer.valueOf(id)).add("Unknown Cell Type");
        }
    }
}
