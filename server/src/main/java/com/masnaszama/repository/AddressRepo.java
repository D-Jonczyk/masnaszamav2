package com.masnaszama.repository;

import com.masnaszama.dto.AddressDTO;

import com.masnaszama.dto.UserOrdersDTO;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.person.Employee.Courier;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.math.BigDecimal;
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

    @Modifying
    @Transactional
    @Query(value = "UPDATE address a SET a.city=?1, a.street=?2, a.flatNumber=?3, WHERE a.addressId=?4", nativeQuery = true)
    void updateAddressById(String city, String street, Integer flatNumber, Long addressId);

}
