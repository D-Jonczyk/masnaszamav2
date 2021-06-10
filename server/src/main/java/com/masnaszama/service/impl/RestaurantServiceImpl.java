package com.masnaszama.service.impl;

import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.model.restaurant.Restaurant;
import com.masnaszama.repository.RestaurantRepository;
import com.masnaszama.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RestaurantServiceImpl implements RestaurantService {

    private final RestaurantRepository restaurantRepo;

    @Autowired
    public RestaurantServiceImpl(RestaurantRepository restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }


    @Override
    public List<RestaurantSummaryDTO> getRestaurantsByCity(String city) {
        return restaurantRepo.getRestaurantsByCity(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getOpenedRestaurants(String city) {
        return restaurantRepo.getOpenedRestaurants(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getFreeDeliveryRestaurants(String city) {
        return restaurantRepo.getFreeDeliveryRestaurants(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getRestaurantsByRating(String city) {
        return restaurantRepo.getRestaurantsByRating(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getRestaurantsByOrderPrice(String city) {
        return restaurantRepo.getRestaurantsByOrderPrice(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryTime(String city) {
        return restaurantRepo.getRestaurantsByDeliveryTime(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getRestaurantsAlpha(String city) {
        return restaurantRepo.getRestaurantsAlpha(city);
    }

    @Override
    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryCost(String city) {
        return restaurantRepo.getRestaurantsByDeliveryCost(city);
    }

    @Override
    public List<RestaurantMealDTO> getMealsByRestaurantId(Long id) {
        return restaurantRepo.getMealsByRestaurantId(id);
    }

    @Override
    public List<Restaurant> findAllRestaurants() {
        return restaurantRepo.findAll();
    }
}