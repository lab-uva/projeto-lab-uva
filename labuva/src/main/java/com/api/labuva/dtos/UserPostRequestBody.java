package com.api.labuva.dtos;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class UserPostRequestBody {

    @NotEmpty(message = "The name cannot be empty")
    private String name;

    @NotEmpty(message = "The lastname cannot be empty")
    private String lastname;

    @NotEmpty(message = "The username cannot be empty")
    private String username;

    @NotEmpty(message = "The password cannot be empty")
    private String password;

    @NotEmpty(message = "The email cannot be empty")
    private String email;

    private String university;
}
