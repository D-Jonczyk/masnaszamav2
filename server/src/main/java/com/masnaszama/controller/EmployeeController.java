package com.masnaszama.controller;

import com.masnaszama.repository.EmployeeRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/employee", produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {

    private final EmployeeRepo employeeRepo;

    public EmployeeController(EmployeeRepo empRepo) {
        this.employeeRepo = empRepo;
    }

    @GetMapping("/getRestaurantId")
    public Optional<Long> getRestaurantId(@RequestParam Long employeeId) {
        Optional<Long> restaurantId = employeeRepo.getRestaurantIdByEmployeeId(employeeId);
        return restaurantId;
    }
}
