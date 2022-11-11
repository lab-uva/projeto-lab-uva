package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.text.SimpleDateFormat;

@Data
public class SchoolWorkDtoPost {

    @NotBlank
    private String SchoolWorkName;
    @NotBlank
    private String SchoolWorkDescription;
    @NotBlank
    private String deliveryDate;

}
