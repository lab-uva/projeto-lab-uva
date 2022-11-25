package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class UserPostRequestBody {

    @NotEmpty(message = "The username cannot be empty")
    private String username;

    @NotEmpty(message = "The password cannot be empty")
    private String password;
}
