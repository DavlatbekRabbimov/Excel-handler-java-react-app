package excel.uz.server.exception.error;

import excel.uz.server.exception.CustomException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ErrorException {
    public RuntimeException errorCatch(String message, Exception e){
        log.error(message);
        throw new CustomException(message, e);
    }

    public RuntimeException errorLogic(String message){
        log.error(message);
        throw new RuntimeException(message);
    }

}
