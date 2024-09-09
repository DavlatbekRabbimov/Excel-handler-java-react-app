package excel.uz.server.service.impl;

import excel.uz.server.exception.error.ErrorException;
import excel.uz.server.service.FileService;
import excel.uz.server.store.DataStore;
import excel.uz.server.store.SheetSlider;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.IntStream;

@Slf4j
@AllArgsConstructor
@Service
public class FileServiceImpl implements FileService {

    private final ErrorException errorException = new ErrorException();
    private final DataStore dataStore;
    private final SheetSlider sheetSlider;

    @Override
    public List<String> getAllData() {
        List<String> list = new ArrayList<>();
        try {
            for (Map.Entry<Integer, List<String>> entry : dataStore.getData().entrySet()) {
                list.add(entry.getKey(), String.valueOf(entry.getValue()));
            }
            return list;
        } catch (Exception e) {
            throw errorException.errorCatch("Error: data list is not gotten - file service", e);
        }
    }

    @Override
    public double sumOneValue(String headerOne, String categoryOne, String headerSum) {
        return sumValues(Collections.singletonList(headerOne), Collections.singletonList(categoryOne), headerSum);
    }

    @Override
    public double sumTwoValue(String headerOne,
                              String categoryOne,
                              String headerTwo,
                              String categoryTwo,
                              String headerSum) {
        return sumValues(Arrays.asList(headerOne, headerTwo), Arrays.asList(categoryOne, categoryTwo), headerSum);
    }

    @Override
    public int changeNumber(int number) {
        sheetSlider.setNumber(number);
        return number;
    }

    public double sumValues(List<String> headers, List<String> categories, String headerSum) {
        List<String> headerRow = dataStore.getData().get(0);
        List<Integer> headerIndices = headers.stream()
                .map(headerRow::indexOf)
                .toList();
        int columnForSumIndex = headerRow.indexOf(headerSum);

        if (headerIndices.contains(-1) || columnForSumIndex == -1) {
            return 0;
        }

        double sum = 0.0;
        for (List<String> row : dataStore.getData().values()) {
            boolean match = IntStream.range(0, headerIndices.size())
                    .allMatch(id -> row.get(headerIndices.get(id)).equals(categories.get(id)));
            if (match) {
                try {
                    sum += Double.parseDouble(row.get(columnForSumIndex));
                } catch (NumberFormatException e) {
                    throw errorException.errorCatch("Error: SumOneValue is not worked!", e);
                }
            }
        }
        sum = Math.round(sum * 10.0) / 10.0;
        return sum;
    }

}


