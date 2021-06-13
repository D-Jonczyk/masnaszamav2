package com.masnaszama.service.impl;

import com.masnaszama.dto.OrdersDTO;
import com.masnaszama.dto.RestaurantOrdersDTO;
import com.masnaszama.model.order.Meal;
import com.masnaszama.model.order.Order;
import com.masnaszama.model.views.OrdersDelivery;
import com.masnaszama.repository.MealRepo;
import com.masnaszama.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderRepo orderRepo;
    private final MealRepo mealRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo, MealRepo mealRepo) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
    }

    public Iterable<Order> findAllOrders(){
        return orderRepo.findAll();
    }

    public List<OrdersDTO> getOrderByCustomerId(Long personId) {
        return orderRepo.getOrderByCustomerId(personId);
    }

    public List<RestaurantOrdersDTO> getOrdersByRestaurantId(Long restaurantId) {
        return orderRepo.getOrdersByRestaurantId(restaurantId);
    }

    public List<OrdersDelivery> getOrdersToDeliverByCourierId(Long courierId){
        return orderRepo.getOrdersToDeliverByCourierId(courierId);
    }

    public void updateOrderStatus(Long orderId){
        orderRepo.updateOrderStatus(orderId);
    }

    public void createNewOrder(Order newOrder) {
        orderRepo.save(newOrder);
    }

    public void createNewMeal(Meal newMeal) {
        mealRepo.save(newMeal);
    }

    public void setStatus(Long id) { orderRepo.setStatusToFinished(id); }
}
