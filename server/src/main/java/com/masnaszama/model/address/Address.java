package com.masnaszama.model.address;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.masnaszama.model.User;
import com.masnaszama.model.order.Order;
import com.masnaszama.model.person.Customer;
import com.masnaszama.model.restaurant.Restaurant;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "address_id")
    private Long addressId;

    @JsonIgnore
    @OneToMany(mappedBy="address", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Order> orders;
    @JsonIgnore
    @OneToOne(mappedBy = "address", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Restaurant restaurant;

    @OneToOne(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private User user;
    @Column(name = "city")
    private String city;
    @Column(name = "street")
    private String street;
    @Column(name = "flatNumber")
    private Integer flatNumber;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
