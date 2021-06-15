package com.masnaszama.controller;

import com.masnaszama.model.User;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.CourierSchedules;
import com.masnaszama.model.views.OrdersFinished;
import com.masnaszama.service.impl.CourierServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/courier", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourierController {
    private final CourierServiceImpl courierService;

    public CourierController(CourierServiceImpl courierService) {
        this.courierService = courierService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Courier>> getAllCouriers() {
        List<Courier> couriers = (List<Courier>) courierService.findAllCouriers();
        return new ResponseEntity<>(couriers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Courier> getCourierById(@PathVariable("id") Long id){
        Courier courier = courierService.findCourierById(id);
        return new ResponseEntity<>(courier, HttpStatus.OK);
    }

    @GetMapping("/findByPhone/{phonenumber}")
    public ResponseEntity<Courier> getCourierByPhonenumber(@PathVariable("phonenumber") Long phonenumber){
        Courier courier = courierService.findCourierByPhonenumber(phonenumber);
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

    @PutMapping(path = "/update", headers = {
            "content-type=application/json; charset=utf-8" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> updateUser(@RequestBody Courier courier) {
        Long id = courier.getId();
        String first_name = courier.getFirstName();
        String last_name = courier.getLastName();
        Long phonenumber = courier.getPhonenumber();
        this.courierService.updateCourier(last_name, phonenumber, first_name, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/incrementNumberOfDeliveries")
    public void updateOrderStatus(@RequestParam Long courierId){
        courierService.incrementNumberOfDeliveries(courierId);
    }

}
