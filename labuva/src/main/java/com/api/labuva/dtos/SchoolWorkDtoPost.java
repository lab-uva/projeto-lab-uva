package com.api.labuva.dtos;

import com.api.labuva.models.UserModel;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
public class SchoolWorkDtoPost {

    @NotEmpty(message = "School work name cannot be empty")
    private String SchoolWorkName;
    @NotEmpty
    private String SchoolWorkDescription;
    @NotEmpty
    private String deliveryDate;
    @NotEmpty
    private String importanceDegree;
    @NotBlank
    private UserModel userId;
}
