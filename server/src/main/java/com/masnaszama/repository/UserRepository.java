package com.masnaszama.repository;

import com.masnaszama.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    User findUserById(Long id);
    User findUserByEmail(String email);
    Boolean existsByEmail(String email);
    Boolean existsByUsername(String username);

    @Modifying
    @Transactional
    @Query(value = "UPDATE user u SET u.first_name=?2, u.last_name=?3, u.phonenumber=?4, u.email=?5, u.username=?6 WHERE u.id=?1", nativeQuery = true)
    void updateUserByUserId(Long id, String first_name, String last_name, Long phonenumber, String email, String username);

}

