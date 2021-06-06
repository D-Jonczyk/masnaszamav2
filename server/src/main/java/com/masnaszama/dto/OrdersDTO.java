package com.masnaszama.dto;

public class OrdersDTO {
    private final Long orderId;
    private final Integer tip;
    private final Long customerId;

    public OrdersDTO(Long orderId, Integer tip, Long customerId) {
        this.orderId = orderId;
        this.tip = tip;
        this.customerId = customerId;
    }

    public Integer getTip() {
        return tip;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public Long getOrderId() {
        return orderId;
    }
}
