package com.masnaszama.model.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.masnaszama.model.restaurant.RestaurantsMeals;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Meal {

    public Meal() { }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mealId;

    private String mealName;
    private BigDecimal price;

    @OneToMany(mappedBy = "meal")
    private Set<RestaurantsMeals> restaurantsMeals = new HashSet<>();

//    @OneToOne(mappedBy = "meal")
//    private Request request;

    @OneToMany(mappedBy = "meal")
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    @JsonProperty(value = "mealId")
    public Long getMealId() {
        return mealId;
    }

    @JsonProperty(value = "mealId")
    public void setMealId(Long mealId) {
        this.mealId = mealId;
    }

    @JsonProperty(value = "mealName")
    public String getMealName() {
        return mealName;
    }

    @JsonProperty(value = "mealName")
    public void setMealName(String mealName) {
        this.mealName = mealName;
    }

    @JsonProperty(value = "price")
    public BigDecimal getPrice() {
        return price;
    }

    @JsonProperty(value = "price")
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Set<RestaurantsMeals> getRestaurantsMeals() {
        return restaurantsMeals;
    }

    public void setRestaurantsMeals(Set<RestaurantsMeals> restaurantsMeals) {
        this.restaurantsMeals = restaurantsMeals;
    }

    /*    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }*/
}
