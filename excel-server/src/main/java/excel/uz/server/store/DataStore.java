package excel.uz.server.store;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
@Component
public class DataStore {

    private final Map<Integer, List<String>> data = new HashMap<>();

    public void add(Integer id, List<String> value){
        data.put(id, value);
    }

}
