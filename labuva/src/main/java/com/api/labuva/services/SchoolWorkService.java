package com.api.labuva.services;

import com.api.labuva.dtos.SchoolWorkDtoIsDoneById;
import com.api.labuva.dtos.SchoolWorkDtoPost;
import com.api.labuva.dtos.SchoolWorkDtoPut;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.models.UserModel;
import com.api.labuva.repositories.SchoolWorkRepository;
import com.api.labuva.util.DateParsing;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class SchoolWorkService {
    final SchoolWorkRepository schoolWorkRepository;
    private final UserSecurityService userSecurityService;


    @Transactional
    public SchoolWorkModel save(SchoolWorkDtoPost schoolWorkDtoPost) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return schoolWorkRepository.save(SchoolWorkModel.builder()
                        .userModel(userSecurityService.findByName(username))
                .schoolWorkName(schoolWorkDtoPost.getSchoolWorkName())
                .schoolWorkDescription(schoolWorkDtoPost.getSchoolWorkDescription())
                .deliveryDate(DateParsing.convertingStringToDate(schoolWorkDtoPost.getDeliveryDate()))
                .createdAtDate(LocalDateTime.now(ZoneId.of("UTC")))
                .workIsDone(false)
                .importanceDegree(schoolWorkDtoPost.getImportanceDegree())
                .build());
    }

    public List<SchoolWorkModel> findAll() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserModel userModel = userSecurityService.findByName(username);
        List<SchoolWorkModel> schoolWorkModelList = schoolWorkRepository.findAll();

        schoolWorkModelList.removeIf(schoolWorkModel -> !schoolWorkModel.getUserModel().getUserId().toString().equals(userModel.getUserId().toString()));
        return schoolWorkModelList;
    }

    public List<SchoolWorkModel> findAllTest() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserModel userModel = userSecurityService.findByName(username);
        return schoolWorkRepository.findAllByUserModel_UserId(userModel.getUserId());
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
        SchoolWorkModel schoolWorkModel = SchoolWorkModel.builder()
                .schoolWorkName(schoolWorkDtoPut.getSchoolWorkName())
                .schoolWorkDescription(schoolWorkDtoPut.getSchoolWorkDescription())
                .id(schoolWorkDtoPut.getId())
                .createdAtDate(LocalDateTime.now(ZoneId.of("UTC")))
                .deliveryDate(DateParsing.convertingStringToDate(schoolWorkDtoPut.getDeliveryDate()))
                .workIsDone(schoolWorkDtoPut.isWorkIsDone())
                .importanceDegree(schoolWorkDtoPut.getImportanceDegree())
                .build();
        schoolWorkRepository.save(schoolWorkModel);
    }

    public void updateIsDoneById(SchoolWorkDtoIsDoneById schoolWorkDtoIsDoneById) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        SchoolWorkModel savedSchoolWorkModel = findByIdOrThrowBadRequestException(schoolWorkDtoIsDoneById.getId());
        SchoolWorkModel schoolWorkModel = SchoolWorkModel.builder()
                .schoolWorkName(savedSchoolWorkModel.getSchoolWorkName())
                .schoolWorkDescription(savedSchoolWorkModel.getSchoolWorkDescription())
                .id(savedSchoolWorkModel.getId())
                .createdAtDate(LocalDateTime.now(ZoneId.of("UTC")))
                .deliveryDate(savedSchoolWorkModel.getDeliveryDate())
                .workIsDone(schoolWorkDtoIsDoneById.isWorkIsDone())
                .importanceDegree(savedSchoolWorkModel.getImportanceDegree())
                .userModel(userSecurityService.findByName(username))
                .build();
        schoolWorkRepository.save(schoolWorkModel);
    }
}
