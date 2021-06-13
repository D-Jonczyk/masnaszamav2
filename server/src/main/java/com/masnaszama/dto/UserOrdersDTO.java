package com.masnaszama.dto;

public class UserOrdersDTO {
    private final Long orderId;
    private final String desiredDeliveryTime;
    private final Integer orderPrice;
    private final String orderedTime;
    private final Long customerId;
    private final Integer tip;
    private final Long statusId;
    private final Long restaurantId;
    private final String restaurantName;
    private final Long addressId;
    private final String comment;
    private final String city;
    private final String street;
    private final Integer flatNumber;

    public UserOrdersDTO(Long orderId, String desiredDeliveryTime,Integer orderPrice, String orderedTime,
                         Integer tip, Long customerId, Long statusId, Long restaurantId,String restaurantName,Long addressId,String comment,
                         String city, String street, Integer flatNumber) {
        this.orderId = orderId;
        this.desiredDeliveryTime = desiredDeliveryTime;
        this.orderPrice = orderPrice;
        this.orderedTime = orderedTime;
        this.tip = tip;
        this.customerId = customerId;
        this.statusId = statusId;
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.addressId=addressId;
        this.comment=comment;
        this.city = city;
        this.street=street;
        this.flatNumber=flatNumber;
    }

    public Long getOrderId() {
        return orderId;
    }

    public String getDesiredDeliveryTime() {
        return desiredDeliveryTime;
    }

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public String getOrderedTime() {
        return orderedTime;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public Integer getTip() {
        return tip;
    }

    public Long getStatusId() {
        return statusId;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public Long getAddressId() {
        return addressId;
    }

    public String getComment() {
        return comment;
    }

    public String getStreet() {
        return street;
    }

    public Integer getFlatNumber() {
        return flatNumber;
    }

    public String getCity() {
        return city;
    }
}