package com.masnaszama.controller;

import com.masnaszama.dto.AddressDTO;
import com.masnaszama.dto.OrdersDTO;
import com.masnaszama.service.impl.AddressService;

import com.masnaszama.service.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public List<AddressDTO> getAddressByUserId(@RequestParam Long userId){
        return addressService.getAddressByUserId(userId);
    }
}
