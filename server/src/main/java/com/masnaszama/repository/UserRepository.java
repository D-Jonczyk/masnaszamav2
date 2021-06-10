package com.masnaszama.repository;

import com.masnaszama.model.User;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.OrdersDelivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Created by fan.jin on 2016-10-15.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    User findUserById(Long id);
}

