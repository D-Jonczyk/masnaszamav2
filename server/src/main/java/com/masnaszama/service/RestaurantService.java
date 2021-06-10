package com.masnaszama.service;

import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.model.restaurant.Restaurant;

import java.util.List;

public interface RestaurantService {
    List<RestaurantSummaryDTO> getRestaurantsByCity(String city);

    List<RestaurantSummaryDTO> getOpenedRestaurants(String city);

    List<RestaurantSummaryDTO> getFreeDeliveryRestaurants(String city);

    List<RestaurantSummaryDTO> getRestaurantsByRating(String city);

    List<RestaurantSummaryDTO> getRestaurantsByOrderPrice(String city);

    List<RestaurantSummaryDTO> getRestaurantsByDeliveryTime(String city);

    List<RestaurantSummaryDTO> getRestaurantsAlpha(String city);

    List<RestaurantSummaryDTO> getRestaurantsByDeliveryCost(String city);

    List<RestaurantMealDTO> getMealsByRestaurantId(Long id);

    List<Restaurant> findAllRestaurants();
}
