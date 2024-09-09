package excel.uz.server.service;

import excel.uz.server.store.SheetSlider;

import java.util.List;

public interface FileService {
    List<String> getAllData();

    double sumOneValue(String headerOne, String categoryOne, String headerSum);

    double sumTwoValue(String headerOne,
                       String categoryOne,
                       String headerTwo,
                       String categoryTwo,
                       String headerSum
    );

    int changeNumber(int number);
}
