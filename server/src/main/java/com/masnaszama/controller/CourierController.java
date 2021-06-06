package com.masnaszama.controller;

import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.CourierSchedules;
import com.masnaszama.model.views.OrdersFinished;
import com.masnaszama.service.impl.CourierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/courier", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourierController {
    private final CourierService courierService;

    public CourierController(CourierService courierService) {
        this.courierService = courierService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Courier>> getAllCouriers() {
        List<Courier> couriers = (List<Courier>) courierService.findAllCouriers();
        return new ResponseEntity<>(couriers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Courier> getCourierById(@PathVariable("id") Long personId){
        Courier courier = courierService.findCourierById(personId);
        return new ResponseEntity<>(courier, HttpStatus.OK);
    }

    @GetMapping("/getSchedule/{courierId}/{weekNumber}")
    public ResponseEntity<List<CourierSchedules>> getCourierSchedule(@PathVariable("courierId") Long id, @PathVariable("weekNumber") Integer weekNumber) {
        List<CourierSchedules> courierSchedules = (List<CourierSchedules>) courierService.getCourierSchedule(id, weekNumber);
        return new ResponseEntity<>(courierSchedules, HttpStatus.OK);
    }

    @GetMapping("/getDeliveryHistory/{courierId}")
    public ResponseEntity<List<OrdersFinished>> getDeliveryHistory(@PathVariable("courierId") Long id) {
        List<OrdersFinished> ordersFinished = (List<OrdersFinished>) courierService.getDeliveryHistory(id);
        return new ResponseEntity<>(ordersFinished, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Courier> addCourier(@RequestBody Courier courier) {
        Courier newCourier = courierService.addCourier(courier);
        return new ResponseEntity<>(newCourier, HttpStatus.CREATED);
    }
   // @PreAuthorize("hasAnyRole('ROLE_COURIER, ROLE_ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Courier> updateCourier(@RequestBody Courier courier) {
        Courier updatedCourier = courierService.updateCourier(courier);
        return new ResponseEntity<>(updatedCourier, HttpStatus.OK);
    }

}
