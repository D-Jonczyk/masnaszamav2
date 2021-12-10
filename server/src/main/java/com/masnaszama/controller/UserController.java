package com.masnaszama.controller;

import com.masnaszama.exception.ResourceConflictException;
import com.masnaszama.model.Authority;
import com.masnaszama.model.User;
import com.masnaszama.repository.UserRepository;
import com.masnaszama.service.UserService;
import com.masnaszama.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;
    private final UserServiceImpl userServiceImpl;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserServiceImpl userServiceImpl, UserRepository userRepository) {
        this.userService = userService;
        this.userServiceImpl = userServiceImpl;
        this.userRepository = userRepository;
    }

    @PutMapping(path = "/user/update", headers = {
            "content-type=application/json; charset=utf-8" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        Long id = user.getId();
        String first_name = user.getFirstName();
        String last_name = user.getLastName();
        Long phonenumber = user.getPhonenumber();
        String email = user.getEmail();
        String username = user.getUsername();
        this.userRepository.updateUserByUserId(id, first_name, last_name, phonenumber, email,username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping(path = "/user/updateurlimg", headers = {
            "content-type=application/json; charset=utf-8" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> updateUserImgUrl(@RequestBody User user) {
        Long id = user.getId();
        String img_url = user.getImgUrl();
        this.userRepository.updateImgUrlByUserId(id, img_url);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/user/{userId}")
    public User loadById(@PathVariable Long userId) {

        return this.userService.findById(userId);
    }
    @GetMapping("/user/findById/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId){
        User user = userService.findUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/user/all")
    public List<User> loadAll() {
        return this.userService.findAll();
    }

    @RequestMapping(method = GET, value = "/user/reset-credentials")
    public ResponseEntity<Map> resetCredentials() {
        this.userService.resetCredentials();
        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        return ResponseEntity.accepted().body(result);
    }

    @RequestMapping(method = POST, value = "/signup")
    public ResponseEntity<?> addUser(@RequestBody User userRequest,
                                     UriComponentsBuilder ucBuilder) {

        System.out.println("userRequest" + userRequest);
        User existUser = this.userService.findByUsername(userRequest.getUsername());
        if (existUser != null) {
            throw new ResourceConflictException(userRequest.getId(), "Username already exists");
        }
        User user = this.userService.save(userRequest);
        HttpHeaders headers = new HttpHeaders();

        headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    /*
     * We are not using userService.findByUsername here(we could), so it is good that we are making
     * sure that the user has role "ROLE_USER" to access this endpoint.
     */
    @RequestMapping("/whoami")
    @PreAuthorize("hasAnyRole('USER', 'COURIER', 'EMPLOYEE', 'ADMIN')")
    public User user() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User userRequest = new User();
        userRequest.setUsername(user.getUsername());
        userRequest.setFirstName(user.getFirstName());
        userRequest.setLastName(user.getLastName());
        userRequest.setImgUrl(user.getImgUrl());
        userRequest.setAuthorities((List<Authority>) user.getAuthorities());
        userRequest.setPhonenumber(user.getPhonenumber());
        userRequest.setId(user.getId());
        // xD
        return userRequest;
    }

}
