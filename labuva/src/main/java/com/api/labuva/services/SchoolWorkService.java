package com.api.labuva.services;

import com.api.labuva.dtos.SchoolWorkDtoPut;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.repositories.SchoolWorkRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;

@Service
public class SchoolWorkService {
    final SchoolWorkRepository schoolWorkRepository;

    public SchoolWorkService(SchoolWorkRepository schoolWorkRepository) {
        this.schoolWorkRepository = schoolWorkRepository;
    }

    @Transactional
    public SchoolWorkModel save(SchoolWorkModel schoolWorkModel) {
        return schoolWorkRepository.save(schoolWorkModel);
    }

    public List<SchoolWorkModel> findAll() {
        return schoolWorkRepository.findAll();
    }

    public SchoolWorkModel findByIdOrThrowBadRequestException(UUID id) {
        return schoolWorkRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, " Not found"));
    }

    public void delete(UUID id) {
        schoolWorkRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    public void replace(SchoolWorkDtoPut schoolWorkDtoPut) {
        SchoolWorkModel savedSchoolWorkModel = findByIdOrThrowBadRequestException(schoolWorkDtoPut.getId());
        SchoolWorkModel schoolWorkModel = SchoolWorkModel.builder().schoolWorkName(schoolWorkDtoPut.getSchoolWorkName())
                        .schoolWorkDescription(schoolWorkDtoPut.getSchoolWorkDescription())
                .id(schoolWorkDtoPut.getId())
                .createdAtDate(LocalDateTime.now(ZoneId.of("UTC")))
                .build();
        schoolWorkRepository.save(schoolWorkModel);
    }
}
