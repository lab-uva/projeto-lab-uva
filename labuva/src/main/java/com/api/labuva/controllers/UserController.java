package com.api.labuva.controllers;

import com.api.labuva.dtos.UserPostRequestBody;
import com.api.labuva.models.SchoolWorkModel;
import com.api.labuva.models.UserModel;
import com.api.labuva.services.UserSecurityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "user")
@Log4j2
@RequiredArgsConstructor
public class UserController {

    private final UserSecurityService userSecurityService;

    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return authentication.getName();
    }

    @PostMapping(path = "/register")
    public ResponseEntity<UserModel> save(@RequestBody @Valid UserPostRequestBody userPostRequestBody) {
        return new ResponseEntity<>(userSecurityService.creatingUser(userPostRequestBody), HttpStatus.CREATED);
    }

    @PostMapping(path = "/register-admin")
    public ResponseEntity<UserModel> saveAdmin(@RequestBody @Valid UserPostRequestBody userPostRequestBody) {
        return new ResponseEntity<>(userSecurityService.creatingUserAdmin(userPostRequestBody), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        userSecurityService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<List<UserModel>> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(userSecurityService.findAll());
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable UUID id) {
        return ResponseEntity.ok(userSecurityService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping("/me")
    public ResponseEntity<Object> findMe() {
        return ResponseEntity.ok(userSecurityService.findMe());
    }
}
