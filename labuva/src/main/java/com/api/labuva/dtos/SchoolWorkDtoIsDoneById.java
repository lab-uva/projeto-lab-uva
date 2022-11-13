package com.api.labuva.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class SchoolWorkDtoIsDoneById {

    private UUID id;
    private boolean workIsDone;
}
