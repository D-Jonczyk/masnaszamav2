package com.masnaszama.repository;

import com.masnaszama.model.person.Employee.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface EmployeeRepo extends CrudRepository<Employee, Long> {

    @Query(value = "SELECT e.restaurant_id " +
            "FROM employee e " +
            "WHERE e.id = ?1", nativeQuery = true)
    Optional<Long> getRestaurantIdByEmployeeId(Long employeeId);
}
