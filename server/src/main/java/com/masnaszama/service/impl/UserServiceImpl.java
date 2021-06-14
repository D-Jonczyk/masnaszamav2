package com.masnaszama.service.impl;


import com.masnaszama.exception.EmailAlreadyExistsException;
import com.masnaszama.exception.UsernameAlreadyExistsException;
import com.masnaszama.model.Authority;
import com.masnaszama.model.User;
import com.masnaszama.model.UserRoleName;
import com.masnaszama.repository.UserRepository;
import com.masnaszama.security.TokenHelper;
import com.masnaszama.service.AuthorityService;
import com.masnaszama.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import java.util.List;



import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthorityService authService;
    private final AuthenticationManager authenticationManager;
    private final TokenHelper tokenProvider;

    protected final org.apache.commons.logging.Log LOGGER = org.apache.commons.logging.LogFactory.getLog(getClass());

    @Autowired
    public UserServiceImpl(UserRepository userRepository, AuthorityService authService, AuthenticationManager authenticationManager, TokenHelper tokenProvider) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    public void resetCredentials() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setPassword(getBCryptPasswordEncoder().encode("123"));
            userRepository.save(user);
        }
    }
    @Override
    public User findUserById(Long id) {
        return userRepository.findUserById(id);
    }
    @Override
    // @PreAuthorize("hasRole('USER')")
    public User findByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username).orElse(null);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public User findById(Long id) throws AccessDeniedException {
        return userRepository.getOne(id);
    }

   // @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() throws AccessDeniedException {
        return userRepository.findAll();
    }

    @Override
    public User save(User userRequest) {
        User user = new User();
        user.setUsername(userRequest.getUsername());
        // System.out.println("userRequest: " + userRequest.getId() + userRequest.getUsername() + userRequest.getLastName());
        user.setPassword(getBCryptPasswordEncoder().encode(userRequest.getPassword()));
        user.setImgUrl(userRequest.getImgUrl());
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setPhonenumber(userRequest.getPhonenumber());
        List<Authority> auth = authService.findByName(UserRoleName.ROLE_USER);
        user.setRoles(auth);
        return userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    private BCryptPasswordEncoder getBCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public String loginUser(String username, String password) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));

        return tokenProvider.generateToken(username);
    }

    public User registerUser(User user, UserRoleName role) {
        LOGGER.info("registering user: " + user.getUsername());

        if(userRepository.existsByUsername(user.getUsername())) {
            LOGGER.warn("username " + user.getUsername() + " already exists.");

            throw new UsernameAlreadyExistsException(
                    String.format("username %s already exists", user.getUsername()));
        }

        if(userRepository.existsByEmail(user.getEmail())) {
            LOGGER.warn("email {} already exists." + user.getEmail());

            throw new EmailAlreadyExistsException(
                    String.format("email %s already exists", user.getEmail()));
        }
        user.setPassword(getBCryptPasswordEncoder().encode(user.getPassword()));
        List<Authority> roles = new ArrayList<>();
        Authority userRole = new Authority();
        userRole.setName(role);
        roles.add(userRole);
        user.setRoles(roles);

        return userRepository.save(user);
    }

}
