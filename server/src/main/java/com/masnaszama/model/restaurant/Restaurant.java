package com.masnaszama.model.restaurant;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.order.Order;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    public Restaurant() {

    }

    public Restaurant(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long restaurantId;

    @JsonBackReference
    @JoinColumn(name = "address_id")
    @OneToOne(fetch = FetchType.LAZY)
    private Address address;

    @OneToOne(mappedBy = "restaurant")
    private OpeningHours openingHours;

    private String restaurantName;
    private String restaurantDescription;
    private Integer averageOpinion;
    private Integer deliveryTime;
    private Integer deliveryCost;
    private Integer minOrderCost;

    @JsonManagedReference
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Order> orders = new HashSet<>();

    @OneToMany(mappedBy = "restaurant")
    private Set<RestaurantsMeals> restaurantsMeals = new HashSet<>();

    public Long getRestaurantId() {
        return restaurantId;
    }

    public Address getAddress() {
        return address;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public String getRestaurantDescription() {
        return restaurantDescription;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public Integer getAverageOpinion() {
        return averageOpinion;
    }

    public Integer getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Integer deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Integer getDeliveryCost() {
        return deliveryCost;
    }

    public void setDeliveryCost(Integer deliveryCost) {
        this.deliveryCost = deliveryCost;
    }

    public Integer getMinOrderCost() {
        return minOrderCost;
    }

    public void setMinOrderCost(Integer minOrderCost) {
        this.minOrderCost = minOrderCost;
    }

    public Set<RestaurantsMeals> getRestaurantsMeals() {
        return restaurantsMeals;
    }

    public void setRestaurantsMeals(Set<RestaurantsMeals> restaurantsMeals) {
        this.restaurantsMeals = restaurantsMeals;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
