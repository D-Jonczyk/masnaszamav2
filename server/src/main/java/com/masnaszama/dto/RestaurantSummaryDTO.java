package com.masnaszama.dto;

public class RestaurantSummaryDTO {

    private final Long id;
    private final String name;
    private final String description;
    private final int averageOpinion;
    private final int deliveryTime;
    private final int deliveryCost;
    private final int minOrderCost;

    public RestaurantSummaryDTO(Long id, String name, String description, int averageOpinion, int deliveryTime, int deliveryCost, int minOrderCost) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.averageOpinion = averageOpinion;
        this.deliveryTime = deliveryTime;
        this.deliveryCost = deliveryCost;
        this.minOrderCost = minOrderCost;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getAverageOpinion() {
        return averageOpinion;
    }

    public int getDeliveryTime() {
        return deliveryTime;
    }

    public int getDeliveryCost() {
        return deliveryCost;
    }

    public int getMinOrderCost() {
        return minOrderCost;
    }
}
