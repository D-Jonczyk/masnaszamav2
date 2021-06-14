package com.masnaszama.service;

import com.masnaszama.model.person.Employee.Courier;

import java.util.Optional;

public interface CourierService {
    Courier findCourierByPhonenumber(Long phonenumber);
    void incrementNumberOfDeliveries(Long courierId);
}
