package com.masnaszama.service;

import com.masnaszama.model.User;
import com.masnaszama.model.UserRoleName;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface UserService {
  void resetCredentials();

  User findById(Long id);

  User findByUsername(String username);

  User findUserById(Long id);

  List<User> findAll();

  User save(User user);

  User findUserByEmail(String email);

  User registerUser(User user, UserRoleName role);

}
