package com.masnaszama.service;

import com.masnaszama.model.User;

import java.util.List;

public interface UserService {
  void resetCredentials();

  User findById(Long id);

  User findByUsername(String username);

  User findUserById(Long id);

  List<User> findAll();

  User save(User user);

}
