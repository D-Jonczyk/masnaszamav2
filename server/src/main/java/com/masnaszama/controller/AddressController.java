package com.masnaszama.controller;

import com.masnaszama.dto.AddressDTO;
import com.masnaszama.model.User;
import com.masnaszama.model.address.Address;
import com.masnaszama.service.impl.AddressService;

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
    @PutMapping(path = "/update", headers = {
            "content-type=application/json; charset=utf-8" }, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Address> updateUser(@RequestBody Address address) {
        Address updateAddress = addressService.updateAddress(address);
        return new ResponseEntity<>(updateAddress, HttpStatus.OK);
    }
}
