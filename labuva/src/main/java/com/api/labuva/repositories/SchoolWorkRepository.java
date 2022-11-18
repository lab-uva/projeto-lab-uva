package com.api.labuva.repositories;

import com.api.labuva.dtos.UserDto;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
public interface SchoolWorkRepository extends JpaRepository<SchoolWorkModel, UUID> {

    @Query(value = "SELECT * FROM USERS", nativeQuery = true)
    List<String> getAllUsersName();

//    @Modifying
//    @Transactional
//    @Query(value = "INSERT INTO USERS (X, Y, Z) VALUES (A, B, C)")
//    String addUser(String nome, String email, String cpf);
//
//    @Query(value = "SELECT * FROM USERS" +
//            "WHERE USERS.NAME = :userName", nativeQuery = true)
//    UserDto findByUserName(String userName);

//    @Query(value = "SELECT * FROM USERS" +
//            "WHERE USERS.ID = : userId", nativeQuery = true)
//    UserModel

}
