package com.masnaszama.dto;

import java.math.BigDecimal;

public class RestaurantMealDTO {

    private Long id;
    private String name;
    private BigDecimal price;

    public RestaurantMealDTO(Long id, String name, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }
}
