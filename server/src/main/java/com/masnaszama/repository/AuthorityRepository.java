package com.masnaszama.repository;

import com.masnaszama.model.Authority;
import com.masnaszama.model.UserRoleName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Authority findByName(UserRoleName name);
}
