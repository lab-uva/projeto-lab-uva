package com.api.labuva.dtos;

import javax.validation.constraints.NotBlank;

public class SchoolWorkDto {

    @NotBlank
    private String SchoolWorkName;
    @NotBlank
    private String SchoolWorkDescription;

    public String getSchoolWorkName() {
        return SchoolWorkName;
    }

    public void setSchoolWorkName(String schoolWorkName) {
        SchoolWorkName = schoolWorkName;
    }

    public String getSchoolWorkDescription() {
        return SchoolWorkDescription;
    }

    public void setSchoolWorkDescription(String schoolWorkDescription) {
        SchoolWorkDescription = schoolWorkDescription;
    }
}
