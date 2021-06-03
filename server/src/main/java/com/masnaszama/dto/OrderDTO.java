package com.masnaszama.dto;

import com.masnaszama.model.payment.Payment;
import com.masnaszama.model.person.Customer;
import com.masnaszama.model.restaurant.Restaurant;

public class OrderDTO {
    private Integer tip;
    private Integer orderPrice;
    private String orderedTime;
    private String desiredDeliveryTime;
    private Restaurant restaurant;
    private Customer customer;
    private Payment payment;
}
