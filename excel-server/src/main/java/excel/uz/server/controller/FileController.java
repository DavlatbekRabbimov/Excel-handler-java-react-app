package excel.uz.server.controller;

import excel.uz.server.exception.error.ErrorException;
import excel.uz.server.service.FileService;
import excel.uz.server.service.FileHandlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Objects;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class FileController {

    private final Path filePath = Paths.get(System.getProperty("java.io.tmpdir"));
    private final ErrorException errorException = new ErrorException();
    private final FileService fileService;
    private final FileHandlerService fileHandlerService;
    private Path targetLocation;

    @Autowired
    public FileController(FileService fileService, FileHandlerService fileHandlerService) {
        this.fileHandlerService = fileHandlerService;
        this.fileService = fileService;
    }
    @PostMapping("/file")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            targetLocation = this.filePath.resolve(Objects.requireNonNull(file.getOriginalFilename()));
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            fileHandlerService.handleFile(targetLocation);
            return ResponseEntity.status(HttpStatus.OK).body("File successfully uploaded!" + file.getOriginalFilename());
        } catch (MultipartException e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Error: file is not uploaded!" + file.getOriginalFilename());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/data-list")
    public List<String> getAllData() {
        try {
            fileHandlerService.handleFile(targetLocation);
            return fileService.getAllData();
        } catch (Exception e) {
            throw errorException.errorCatch("Error: data list is not realized!", e);
        }
    }

    @GetMapping("/sum-one/{headerOne}/{categoryOne}/{headerSum}")
    public double getSumOneResult(@PathVariable String headerOne, @PathVariable String categoryOne, @PathVariable String headerSum) {
        try {
            return fileService.sumOneValue(headerOne, categoryOne, headerSum);
        } catch (Exception e) {
            throw errorException.errorCatch("Error: data list is not realized!", e);
        }
    }

    @GetMapping("/sum-two/{headerOne}/{categoryOne}/{headerTwo}/{categoryTwo}/{headerSum}")
    public double getSumTwoResult(
            @PathVariable String headerOne,
            @PathVariable String categoryOne,
            @PathVariable String headerTwo,
            @PathVariable String categoryTwo,
            @PathVariable String headerSum) {
        try {
            return fileService.sumTwoValue(headerOne, categoryOne, headerTwo, categoryTwo, headerSum);
        } catch (Exception e) {
            throw errorException.errorCatch("Error: data list is not realized!", e);
        }
    }

    @PostMapping("/slide-number/{number}")
    public int changeSlideNumber(@PathVariable int number) {
        try {
            fileService.changeNumber(number);
            return number;
        } catch (Exception e) {
            throw errorException.errorCatch("Error: data list is not realized!", e);
        }
    }
}
