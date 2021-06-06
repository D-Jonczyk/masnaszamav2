package com.masnaszama.service.impl;

import com.masnaszama.model.Authority;
import com.masnaszama.model.User;
import com.masnaszama.model.UserRequest;
import com.masnaszama.model.UserRoleName;
import com.masnaszama.model.person.Person;
import com.masnaszama.repository.PersonRepository;
import com.masnaszama.repository.UserRepository;
import com.masnaszama.service.AuthorityService;
import com.masnaszama.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by fan.jin on 2016-10-15.
 */

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PersonRepository personRepository;

    private final AuthorityService authService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PersonRepository personRepository, AuthorityService authService) {
        this.userRepository = userRepository;
        this.personRepository = personRepository;
        this.authService = authService;
    }

    public void resetCredentials() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setPassword(getBCryptPasswordEncoder().encode("123"));
            userRepository.save(user);
        }
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

    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() throws AccessDeniedException {
        return userRepository.findAll();
    }

    @Override
    public User save(UserRequest userRequest) {
        User user = new User();
        Person person;
        Optional<Person> optionalPerson = personRepository.findByPhonenumber(userRequest.getPhonenumber());
        if(optionalPerson.isPresent()) {
            person = optionalPerson.get();
        }
        else {
            System.out.println("phone, last, first:" + userRequest.getPhonenumber() + "" + userRequest.getLastname() + "" + userRequest.getFirstname());
            person = new Person();
            person.setPhonenumber(userRequest.getPhonenumber());
            person.setLastName(userRequest.getLastname());
            person.setFirstName(userRequest.getFirstname());
            personRepository.save(person);
        }
        user.setPerson(person);
        user.setUsername(userRequest.getUsername());
        user.setPassword(getBCryptPasswordEncoder().encode(userRequest.getPassword()));
        user.setImgUrl(userRequest.getImgUrl());
        List<Authority> auth = authService.findByName(UserRoleName.ROLE_USER);
        user.setAuthorities(auth);
        return userRepository.save(user);
    }

    private BCryptPasswordEncoder getBCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
