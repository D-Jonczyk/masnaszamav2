package com.masnaszama.model.order;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.person.Customer;
import com.masnaszama.model.restaurant.Restaurant;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order_")
public class Order {
    private Integer tip;
    private Integer orderPrice;

    private String comment;
    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());

    public Order(Long orderId)
    {
        this.orderId = orderId;
    }

    public Order() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    @JsonBackReference(value = "restaurant")
    private Restaurant restaurant;


    @ManyToOne
    @JoinColumn(name="customer_id")
    @JsonBackReference(value = "customer")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="address_id")
    @JsonBackReference(value = "address")
    private Address address;


    @JsonManagedReference(value = "orders-meals")
    @OneToMany(mappedBy = "order", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    @OneToOne
    @JoinColumn(name="status_id")
    private Status orderStatus;

    @JsonProperty(value = "orderMeals")
    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    @JsonProperty(value = "orderMeals")
    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {

        this.ordersMeals = ordersMeals;

        for (OrdersMeals orderMeal : ordersMeals) {
            orderMeal.setOrder(this);
        }
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Integer getTip() {
        return tip;
    }

    public void setTip(Integer tip) {
        this.tip = tip;
    }

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(Integer orderPrice) {
        this.orderPrice = orderPrice;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @JsonProperty(value = "restaurantId")
    public Restaurant getRestaurant() {
        return restaurant;
    }

    @JsonProperty(value = "restaurantId")
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    @JsonProperty(value = "customerId")
    public Customer getCustomer() {
        return customer;
    }

    @JsonProperty(value = "customerId")
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @JsonProperty(value = "addressId")
    public Address getAddress() {
        return address;
    }

    @JsonProperty(value = "addressId")
    public void setAddress(Address address) {
        this.address = address;
    }

    public String getOrderedTime() {
        return orderedTime;
    }

    public void setOrderedTime(String orderedTime) {
        this.orderedTime = orderedTime;
    }

    public String getDesiredDeliveryTime() {
        return desiredDeliveryTime;
    }

    public void setDesiredDeliveryTime(String desiredDeliveryTime) {
        this.desiredDeliveryTime = desiredDeliveryTime;
    }

    public Status getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Status orderStatus) {
        this.orderStatus = orderStatus;
    }


}
