package com.masnaszama.model.restaurant;

import com.masnaszama.model.order.Meal;

import javax.persistence.*;

@Entity
@Table(name="restaurants_meals")
public class RestaurantsMeals {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "restaurant_meal_id")
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "meal_id", nullable = false)
    private Meal meal;
}
