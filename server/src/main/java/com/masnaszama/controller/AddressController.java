package com.masnaszama.controller;

import com.masnaszama.dto.AddressDTO;
import com.masnaszama.dto.OrdersDTO;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.service.impl.AddressService;

import com.masnaszama.service.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/address", produces = MediaType.APPLICATION_JSON_VALUE)
public class AddressController {
    private final AddressService addressService;
    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping(path = "/getby/user")
    public AddressDTO getAddressByUserId(@RequestParam Long userId){
        return addressService.getAddressByUserId(userId);
    }

    @GetMapping(path = "/getby/customer")
    public List<AddressDTO> getAddressByCustomerId(@RequestParam Long customerId){
        return addressService.getAddressByCustomerId(customerId);
    }
}
