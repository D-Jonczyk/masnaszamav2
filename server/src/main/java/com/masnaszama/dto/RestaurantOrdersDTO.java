package com.masnaszama.dto;

public class RestaurantOrdersDTO {

    private final Long orderId;
    private final String name;

    public RestaurantOrdersDTO(Long orderId, String name) {
        this.orderId = orderId;
        this.name = name;
    }

    public Long getOrderId() {
        return orderId;
    }

    public String getName() {
        return name;
    }
}
