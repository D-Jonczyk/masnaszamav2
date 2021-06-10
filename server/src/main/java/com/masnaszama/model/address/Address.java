package com.masnaszama.model.address;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.masnaszama.model.person.Customer;
import com.masnaszama.model.restaurant.Restaurant;

import javax.persistence.*;

@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "address_id")
    private Long addressId;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    private Customer customer;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    private Restaurant restaurant;

    private String city;
    private String street;
    private Integer flatNumber;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getFlatNumber() {
        return flatNumber;
    }

    public void setFlatNumber(Integer flatNumber) {
        this.flatNumber = flatNumber;
    }
}
