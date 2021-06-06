package com.masnaszama.repository;


import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.model.restaurant.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {

    @Query(value =  "SELECT new com.masnaszama.dto.RestaurantSummaryDTO " +
                    "(r.restaurantId, r.restaurantName, r.restaurantDescription, " +
                    "r.averageOpinion, r.deliveryTime, r.deliveryCost, r.minOrderCost)" +
                    "FROM Restaurant r " +
                    "JOIN Address a ON a.addressId = r.address.addressId " +
                    "WHERE a.city = ?1")
    List<RestaurantSummaryDTO> getRestaurantsByCity(String city);

    @Query(value = "SELECT new com.masnaszama.dto.RestaurantMealDTO " +
                    "(m.mealId, m.mealName, m.price) " +
                    "FROM Meal m " +
                    "JOIN RestaurantsMeals rm on m.mealId = rm.meal.mealId " +
                    "WHERE rm.restaurant.restaurantId = ?1")
    List<RestaurantMealDTO> getMealsByRestaurantId(Long id);

}




