package com.masnaszama.model.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.masnaszama.model.payment.Payment;
import com.masnaszama.model.person.Customer;
import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.restaurant.Restaurant;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order_")
public class Order {
    private Integer tip;
    private Integer orderPrice;

    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());


//    public Order(Integer tip, Integer orderPrice, String orderedTime,
//                 String desiredDeliveryTime, Long orderId,
//                 Restaurant restaurant, Customer customer,
//                 Payment payment, Status orderStatus) {
//        this.tip = tip;
//        this.orderPrice = orderPrice;
//        this.orderedTime = orderedTime;
//        this.desiredDeliveryTime = desiredDeliveryTime;
//        this.orderId = orderId;
//        this.restaurant = restaurant;
//        this.customer = customer;
//        this.payment = payment;
//        this.orderStatus = orderStatus;
//    }

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
    private Restaurant restaurant;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="customer_id")//, nullable=false)
    private Customer customer;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="payment_id", referencedColumnName = "payment_id")
    private Payment payment;

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

    @JsonProperty(value = "paymentId")
    public Payment getPayment() {
        return payment;
    }

    @JsonProperty(value = "paymentId")
    public void setPayment(Payment payment) {
        this.payment = payment;
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
