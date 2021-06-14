package com.masnaszama.repository;

import com.masnaszama.dto.AddressDTO;

import com.masnaszama.dto.UserOrdersDTO;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.person.Employee.Courier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AddressRepo extends CrudRepository<Address, Long> {

    @Query(value = "SELECT new com.masnaszama.dto.AddressDTO" +
            "(a.city, a.flatNumber, a.street) " +
            "FROM User u  " +
            "JOIN Address a ON a.addressId =  u.address.addressId " +
            "WHERE u.id = ?1")
    AddressDTO getAddressByUserId(Long userId);

    @Query(value = "SELECT new com.masnaszama.dto.AddressDTO" +
            "(a.city, a.flatNumber, a.street)" +
            "FROM Address a  " +
            "JOIN Order o ON a.addressId = o.address.addressId " +
            "WHERE o.customer.id = ?1")
    List<AddressDTO> getAddressByCustomerId(Long customerId);

}
