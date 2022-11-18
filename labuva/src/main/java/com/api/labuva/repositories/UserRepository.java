package com.api.labuva.repositories;

import com.api.labuva.dtos.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserDto, UUID> {

        @Query(value = "SELECT * FROM USERS" +
            "WHERE USERS.NAME = :userName", nativeQuery = true)
    UserDto findUserByName(String userName);


}
