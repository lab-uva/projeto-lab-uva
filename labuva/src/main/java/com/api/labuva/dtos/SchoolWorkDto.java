package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SchoolWorkDto {

    @NotBlank
    private String schoolWorkName;
    @NotBlank
    private String schoolWorkDescription;

}
