package com.api.labuva.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "TB_SCHOOL_WORK")
public class SchoolWorkModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String schoolWorkName;
    private String schoolWorkDescription;
    private LocalDateTime createdAtDate;
    private Date deliveryDate;
    private boolean workIsDone;
    private String importanceDegree;

    @ManyToOne
    private UserModel userModel;

}
