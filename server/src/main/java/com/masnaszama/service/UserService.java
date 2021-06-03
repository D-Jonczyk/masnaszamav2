package com.masnaszama.service;

import com.masnaszama.model.User;
import com.masnaszama.model.UserRequest;

import java.util.List;

public interface UserService {
  void resetCredentials();

  User findById(Long id);

  User findByUsername(String username);

  List<User> findAll();

  User save(UserRequest user);
}
