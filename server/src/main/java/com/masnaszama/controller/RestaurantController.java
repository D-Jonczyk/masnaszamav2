package com.masnaszama.controller;

import com.masnaszama.dto.RestaurantMealDTO;
import com.masnaszama.dto.RestaurantSummaryDTO;
import com.masnaszama.service.impl.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/restaurant", produces = MediaType.APPLICATION_JSON_VALUE)
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

    @GetMapping(path = "/getOpened")
    public List<RestaurantSummaryDTO> getOpenedRestaurant(@RequestParam String city){

        return restaurantService.getOpenedRestaurants(city);
    }

    @GetMapping(path = "/getFreeDelivery")
    public List<RestaurantSummaryDTO> getFreeDeliveryRestaurant(@RequestParam String city){

        return restaurantService.getFreeDeliveryRestaurants(city);
    }

    @GetMapping(path = "/sortByRating")
    public List<RestaurantSummaryDTO> getRestaurantsByRating(@RequestParam String city){

        return restaurantService.getRestaurantsByRating(city);
    }

    @GetMapping(path = "/sortByOrderPrice")
    public List<RestaurantSummaryDTO> getRestaurantsByOrderPrice(@RequestParam String city){

        return restaurantService.getRestaurantsByOrderPrice(city);
    }

    @GetMapping(path = "/sortByDeliveryTime")
    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryTime(@RequestParam String city){

        return restaurantService.getRestaurantsByDeliveryTime(city);
    }

    @GetMapping(path = "/sortAlpha")
    public List<RestaurantSummaryDTO> getRestaurantsAlpha(@RequestParam String city){

        return restaurantService.getRestaurantsAlpha(city);
    }

    @GetMapping(path = "/sortByDeliveryCost")
    public List<RestaurantSummaryDTO> getRestaurantsByDeliveryCost(@RequestParam String city){

        return restaurantService.getRestaurantsByDeliveryCost(city);
    }

    @GetMapping(path = "/getmeals")
    public List<RestaurantMealDTO> getMeals(@RequestParam Long id){

        return restaurantService.getMealsByRestaurantId(id);
    }

}
