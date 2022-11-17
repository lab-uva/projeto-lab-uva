package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.UUID;

@Data
public class SchoolWorkDtoPut {

    private UUID id;
    private String schoolWorkName;
    private String schoolWorkDescription;
    private String deliveryDate;
    private boolean workIsDone;
}
