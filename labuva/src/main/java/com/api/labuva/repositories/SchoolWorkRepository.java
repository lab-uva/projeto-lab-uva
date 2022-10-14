package com.api.labuva.repositories;

import com.api.labuva.models.SchoolWorkModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SchoolWorkRepository extends JpaRepository<SchoolWorkModel, UUID> {

}
