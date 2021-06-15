package com.masnaszama.controller;

import com.masnaszama.dto.AddressDTO;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.order.Meal;
import com.masnaszama.repository.AddressRepo;
import com.masnaszama.repository.MealRestaurantsRepo;
import com.masnaszama.service.impl.AddressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping(value = "/api/address", produces = MediaType.APPLICATION_JSON_VALUE)
public class AddressController {
    private final AddressService addressService;
    private final AddressRepo addressRepo;
    @Autowired
    public AddressController(AddressService addressService, AddressRepo addressRepo) {
        this.addressService = addressService;
        this.addressRepo = addressRepo;
    }

    @GetMapping(path = "/getby/user")
    public AddressDTO getAddressByUserId(@RequestParam Long userId){
        return addressService.getAddressByUserId(userId);
    }

    @GetMapping(path = "/getby/customer")
    public List<AddressDTO> getAddressByCustomerId(@RequestParam Long customerId){
        return addressService.getAddressByCustomerId(customerId);
    }
    @PutMapping(path = "/update", headers = {
            "content-type=application/json; charset=utf-8" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateAddress(@RequestBody Address address) {
        Long addressId = address.getAddressId();
        String city = address.getCity();
        String street = address.getStreet();
        Integer flat_number = address.getFlatNumber();
        this.addressRepo.updateAddressById(addressId, city, street, flat_number);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
