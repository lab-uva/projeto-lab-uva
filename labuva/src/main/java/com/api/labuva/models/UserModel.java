package com.api.labuva.models;

import com.api.labuva.dtos.SchoolWorkDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;


@Data
@Builder
public class UserModel {

    private String name;
    private String password;
    private List<SchoolWorkDto> schoolWorkDtoList = new ArrayList<>();
}
