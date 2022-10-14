package com.api.labuva.controllers;

import com.api.labuva.dtos.SchoolWorkDto;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.services.SchoolWorkService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/school-work")
public class SchoolWorkController {

    final SchoolWorkService schoolWorkService;

    public SchoolWorkController(SchoolWorkService schoolWorkService) {
        this.schoolWorkService = schoolWorkService;
    }

    @PostMapping
    public ResponseEntity<Object> saveSchoolWork(@RequestBody @Valid SchoolWorkDto schoolWorkDto) {
        var schoolWorkModel = new SchoolWorkModel();
        BeanUtils.copyProperties(schoolWorkDto, schoolWorkModel);
        schoolWorkModel.setCreatedAtDate(LocalDateTime.now(ZoneId.of("UTC")));
        return ResponseEntity.status(HttpStatus.CREATED).body(schoolWorkService.save(schoolWorkModel));
    }

    @GetMapping
    public ResponseEntity<List<SchoolWorkModel>> getAllSchoolWork() {
        return ResponseEntity.status(HttpStatus.OK).body(schoolWorkService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneSchoolWork(@PathVariable(value = "id") UUID id) {
        Optional<SchoolWorkModel> schoolWorkModelOptional = schoolWorkService.findById(id);

        if (!schoolWorkModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("School Work not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(schoolWorkModelOptional.get());
    }
}
