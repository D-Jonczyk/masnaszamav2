package com.masnaszama.model.order;

import com.masnaszama.model.restaurant.RestaurantsMeals;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mealId;

    private String mealName;
    private BigDecimal price;

    @OneToMany(mappedBy = "meal")
    private Set<OrdersMeals> ordersMeals = new HashSet<>();

    @OneToMany(mappedBy = "meal")
    private Set<RestaurantsMeals> restaurantsMeals = new HashSet<>();

    public Set<OrdersMeals> getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(Set<OrdersMeals> ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    public Long getMealId() {
        return mealId;
    }

    public String getMealName() {
        return mealName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setMealName(String mealName) {
        this.mealName = mealName;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Set<RestaurantsMeals> getRestaurantsMeals() {
        return restaurantsMeals;
    }

    public void setRestaurantsMeals(Set<RestaurantsMeals> restaurantsMeals) {
        this.restaurantsMeals = restaurantsMeals;
    }
}
