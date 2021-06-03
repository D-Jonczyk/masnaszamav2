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

    public List<RestaurantMealDTO> getMealsByRestaurantId(Long id)
    {
        return restaurantRepo.getMealsByRestaurantId(id);
    }
}
