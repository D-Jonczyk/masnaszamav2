package com.masnaszama.dto;

import java.math.BigDecimal;

public class RestaurantMealDTO {

    private final Long id;
    private final String name;
    private final BigDecimal price;

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
