package com.api.labuva.controllers;

import com.api.labuva.dtos.SchoolWorkDtoIsDoneById;
import com.api.labuva.dtos.SchoolWorkDtoPost;
import com.api.labuva.dtos.SchoolWorkDtoPut;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.services.SchoolWorkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Object> saveSchoolWork(@RequestBody @Valid SchoolWorkDtoPost schoolWorkDtoPost) {
        return ResponseEntity.status(HttpStatus.CREATED).body(schoolWorkService.save(schoolWorkDtoPost));
    }

    @GetMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<SchoolWorkModel>> getAllSchoolWork() {
        return ResponseEntity.status(HttpStatus.OK).body(schoolWorkService.findAll());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Object> getSchoolWorkById(@PathVariable UUID id) {
        return ResponseEntity.ok(schoolWorkService.findByIdOrThrowBadRequestException(id));
    }
    //(value = "id")

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        schoolWorkService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Void> replace(@RequestBody SchoolWorkDtoPut schoolWorkDtoPut) {
        schoolWorkService.replace(schoolWorkDtoPut);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(path = "/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Void> updateIsDoneById(@PathVariable UUID id, @RequestBody SchoolWorkDtoIsDoneById schoolWorkDtoIsDoneById) {
        schoolWorkDtoIsDoneById.setId(id);
        schoolWorkService.updateIsDoneById(schoolWorkDtoIsDoneById);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
