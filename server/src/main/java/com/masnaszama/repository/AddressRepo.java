package com.masnaszama.repository;

import com.masnaszama.dto.AddressDTO;

import com.masnaszama.model.address.Address;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AddressRepo extends CrudRepository<Address, Long> {

    @Query(value = "SELECT new com.masnaszama.dto.AddressDTO" +
            "(a.city, a.flatNumber, a.street) " +
            "FROM User u  " +
            "JOIN Address a ON a.addressId =  u.address.addressId " +
            "WHERE u.id = ?1")
    List<AddressDTO> getAddressByUserId(Long userId);

}
