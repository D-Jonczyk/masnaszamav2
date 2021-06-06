package com.masnaszama.service.impl;

import com.masnaszama.exception.UserNotFoundException;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.CourierSchedules;
import com.masnaszama.model.views.OrdersFinished;
import com.masnaszama.repository.CourierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourierService {
    private final CourierRepo courierRepo;

    @Autowired
    public CourierService(CourierRepo courierRepo) {
        this.courierRepo = courierRepo;
    }

    public Iterable<Courier> findAllCouriers() {
        return courierRepo.findAll();
    }

    public Courier updateCourier(Courier courier) {
        return courierRepo.save(courier);
    }

    public Courier findCourierById(Long id){
        return courierRepo.findCourierById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + "was not found."));
    }

    public void deleteCourier(Long id) {
        courierRepo.deleteCourierById(id);
    }

    public Courier addCourier(Courier courier) {
        return courierRepo.save(courier);
    }

    public Iterable<CourierSchedules> getCourierSchedule(Long courierId, Integer weekNumber) {
        return courierRepo.getCourierSchedule(courierId, weekNumber);
    }

    public Iterable<OrdersFinished> getDeliveryHistory(Long courierId) {
        return courierRepo.getDeliveryHistory(courierId);
    }
}
