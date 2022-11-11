package com.api.labuva.controllers;

import com.api.labuva.dtos.SchoolWorkDtoPost;
import com.api.labuva.dtos.SchoolWorkDtoPut;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.services.SchoolWorkService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/school-work")
public class SchoolWorkController {

    private final SchoolWorkService schoolWorkService;

    public SchoolWorkController(SchoolWorkService schoolWorkService) {
        this.schoolWorkService = schoolWorkService;
    }

    @PostMapping
    public ResponseEntity<Object> saveSchoolWork(@RequestBody @Valid SchoolWorkDtoPost schoolWorkDto) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        try{
            date = simpleDateFormat.parse(schoolWorkDto.getDeliveryDate());

        } catch (ParseException e) {
            System.out.println(e);
        }
        var schoolWorkModel = new SchoolWorkModel();
        BeanUtils.copyProperties(schoolWorkDto, schoolWorkModel);
        schoolWorkModel.setCreatedAtDate(LocalDateTime.now(ZoneId.of("UTC")));
        schoolWorkModel.setDeliveryDate(date);
        return ResponseEntity.status(HttpStatus.CREATED).body(schoolWorkService.save(schoolWorkModel));
    }

    @GetMapping
    public ResponseEntity<List<SchoolWorkModel>> getAllSchoolWork() {
        return ResponseEntity.status(HttpStatus.OK).body(schoolWorkService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneSchoolWork(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(schoolWorkService.findByIdOrThrowBadRequestException(id));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        schoolWorkService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody SchoolWorkDtoPut schoolWorkDtoPut) {
        schoolWorkService.replace(schoolWorkDtoPut);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
