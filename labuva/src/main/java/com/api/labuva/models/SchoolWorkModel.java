package com.api.labuva.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "TB_SCHOOL_WORK")
public class SchoolWorkModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String schoolWorkName;

    @Column(nullable = false, unique = true)
    private String schoolWorkDescription;

    @Column(nullable = false)
    private LocalDateTime createdAtDate;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getSchoolWorkName() {
        return schoolWorkName;
    }

    public void setSchoolWorkName(String schoolWorkName) {
        this.schoolWorkName = schoolWorkName;
    }

    public String getSchoolWorkDescription() {
        return schoolWorkDescription;
    }

    public void setSchoolWorkDescription(String schoolWorkDescription) {
        this.schoolWorkDescription = schoolWorkDescription;
    }

    public LocalDateTime getCreatedAtDate() {
        return createdAtDate;
    }

    public void setCreatedAtDate(LocalDateTime createdAtDate) {
        this.createdAtDate = createdAtDate;
    }
}
