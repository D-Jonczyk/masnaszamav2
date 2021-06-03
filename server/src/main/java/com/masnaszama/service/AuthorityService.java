package com.masnaszama.service;

import com.masnaszama.model.Authority;
import com.masnaszama.model.UserRoleName;

import java.util.List;

public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByName(UserRoleName name);

}
