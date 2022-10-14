package com.api.labuva.services;

import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.repositories.SchoolWorkRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
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

    public Optional<SchoolWorkModel> findById(UUID id) {
        return schoolWorkRepository.findById(id);
    }
}
