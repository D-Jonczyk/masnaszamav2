package com.masnaszama.service.impl;

import com.masnaszama.dto.AddressDTO;

import com.masnaszama.model.address.Address;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    private final AddressRepo addressRepo;
    @Autowired
    public AddressService(AddressRepo addressRepo) {
        this.addressRepo = addressRepo;
    }

    public AddressDTO getAddressByUserId(Long userId) {
        return addressRepo.getAddressByUserId(userId);
    }
    public List<AddressDTO> getAddressByCustomerId(Long orderId) {
        return addressRepo.getAddressByCustomerId(orderId);
    }
}
