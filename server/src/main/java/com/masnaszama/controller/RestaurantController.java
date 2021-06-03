package com.masnaszama.controller;

import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.service.impl.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService) {

        this.restaurantService = restaurantService;
    }

    @GetMapping(path = "/getbycity")
    public List<RestaurantSummaryDTO> getRestaurantByCity(@RequestParam String city){

        return restaurantService.getRestaurantsByCity(city);
    }

    @GetMapping(path = "/getmeals")
    public List<RestaurantMealDTO> getMeals(@RequestParam Long id){

        return restaurantService.getMealsByRestaurantId(id);
    }

}
