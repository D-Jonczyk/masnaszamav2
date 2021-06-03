package com.masnaszama.repository;

import com.masnaszama.model.person.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findByPhonenumber(Long phoneNumber);
}
