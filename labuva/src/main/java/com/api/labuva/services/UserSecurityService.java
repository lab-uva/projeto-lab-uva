package com.api.labuva.services;

import com.api.labuva.dtos.UserPostRequestBody;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.models.UserModel;
import com.api.labuva.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserSecurityService {

    private final UserRepository userRepository;

    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Transactional
    public UserModel creatingUser(UserPostRequestBody userPostRequestBody) {
        UserModel userModel = UserModel.builder()
                .username(userPostRequestBody.getUsername())
                .password(passwordEncoder().encode(userPostRequestBody.getPassword()))
                .role("ROLE_USER")
                .build();

        return userRepository.save(userModel);
    }

    @Transactional
    public UserModel creatingUserAdmin(UserPostRequestBody userPostRequestBody) {
        UserModel userModel = UserModel.builder()
                .username(userPostRequestBody.getUsername())
                .password(passwordEncoder().encode(userPostRequestBody.getPassword()))
                .role("ROLE_USER,ROLE_ADMIN")
                .build();

        return userRepository.save(userModel);
    }

    public List<UserModel> findAll() {
        return userRepository.findAll();
    }

    public UserModel findByIdOrThrowBadRequestException(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, " Not found"));
    }

    public void delete(UUID id) {
        userRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    public UserModel findByName(String name) {
        return userRepository.findByUsername(name)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, " Not found"));
    }
    public UserModel findMe() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, " Not found"));
    }



}
