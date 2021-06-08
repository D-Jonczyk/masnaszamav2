package com.masnaszama.service.impl;

import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepo;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }

    public List<RestaurantSummaryDTO> getRestaurantsByCity(String city)
    {
        return restaurantRepo.getRestaurantsByCity(city);
    }

    public List<RestaurantSummaryDTO> getOpenedRestaurants(String city)
    {
        return restaurantRepo.getOpenedRestaurants(city);
    }

    public List<RestaurantSummaryDTO> getFreeDeliveryRestaurants(String city)
    {
        return restaurantRepo.getFreeDeliveryRestaurants(city);
    }

    public List<RestaurantSummaryDTO> getRestaurantsByRating(String city)
    {
        return restaurantRepo.getRestaurantsByRating(city);
    }

    public List<RestaurantSummaryDTO> getRestaurantsByOrderPrice(String city)
    {
        return restaurantRepo.getRestaurantsByOrderPrice(city);
    }

    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryTime(String city)
    {
        return restaurantRepo.getRestaurantsByDeliveryTime(city);
    }

    public List<RestaurantSummaryDTO> getRestaurantsAlpha(String city)
    {
        return restaurantRepo.getRestaurantsAlpha(city);
    }

    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryCost(String city)
    {
        return restaurantRepo.getRestaurantsByDeliveryCost(city);
    }

    public List<RestaurantMealDTO> getMealsByRestaurantId(Long id)
    {
        return restaurantRepo.getMealsByRestaurantId(id);
    }
}
