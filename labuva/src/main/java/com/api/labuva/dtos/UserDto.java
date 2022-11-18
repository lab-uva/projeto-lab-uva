package com.api.labuva.dtos;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Data
@Table
@Entity
public class UserDto {

    @Id
    @GeneratedValue
    private UUID idUser;
    private String userName;
    private String password;

}
