package com.masnaszama.service.impl;

import com.masnaszama.client.FacebookClient;
import com.masnaszama.exception.InternalServerException;
import com.masnaszama.model.User;
import com.masnaszama.model.UserRoleName;
import com.masnaszama.model.facebook.FacebookUser;
import com.masnaszama.security.TokenHelper;
import com.masnaszama.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.Optional;
import java.util.Random;

@Service
@Slf4j
public class FacebookService {

    private final FacebookClient facebookClient;
    private final UserService userService;
    private final TokenHelper tokenProvider;

    public FacebookService(FacebookClient facebookClient, UserService userService, TokenHelper tokenProvider) {
        this.facebookClient = facebookClient;
        this.userService = userService;
        this.tokenProvider = tokenProvider;
    }

    public User loginUser(String fbAccessToken) {
        FacebookUser facebookUser = facebookClient.getUser(fbAccessToken);

        return userService.findById(facebookUser.getId());
    }

    private User convertTo(FacebookUser facebookUser) {
        return User.builder()
                .id(facebookUser.getId())
                .email(facebookUser.getEmail())
                .username(generateUsername(facebookUser.getFirstName(), facebookUser.getLastName()))
                .password(generatePassword(8))
                .build();
    }

    private String generateUsername(String firstName, String lastName) {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);

        return String.format("%s.%s.%06d", firstName, lastName, number);
    }

    private String generatePassword(int length) {
        String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        String specialCharacters = "!@#$";
        String numbers = "1234567890";
        String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
        Random random = new Random();
        char[] password = new char[length];

        password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
        password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
        password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
        password[3] = numbers.charAt(random.nextInt(numbers.length()));

        for(int i = 4; i< length ; i++) {
            password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
        }
        return new String(password);
    }
}