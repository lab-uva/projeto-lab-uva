package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Data
public class SchoolWorkDtoPut {

    private UUID id;
    @NotBlank
    private String schoolWorkName;
    @NotBlank
    private String schoolWorkDescription;
}
