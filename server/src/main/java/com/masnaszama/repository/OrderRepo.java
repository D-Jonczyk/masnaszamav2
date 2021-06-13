package com.masnaszama.repository;

import com.masnaszama.dto.OrdersDTO;
import com.masnaszama.dto.RestaurantOrdersDTO;
import com.masnaszama.model.order.Order;
import com.masnaszama.model.views.OrdersDelivery;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface OrderRepo extends CrudRepository<Order, Long> {

    Order findOrderByOrderId(Long id);

    @Modifying
    @Transactional
    @Query("update Order o " +
            "set o.orderStatus.statusId = 4 " +
            "where o.orderId = ?1")
    void createNewOrder(Long orderId);

    @Query(value = "SELECT new com.masnaszama.dto.OrdersDTO" +
    "(o.orderId, o.tip, o.customer.id) " +
    "FROM Order o " +
    "WHERE o.customer.id = ?1")
    List<OrdersDTO> getOrderByCustomerId(Long customerId);

     //Work fine
    @Query(value = "SELECT new com.masnaszama.dto.RestaurantOrdersDTO" +
                    "(o.orderId, m.mealName) " +
            "FROM Order o " +
            "JOIN OrdersMeals om ON om.order.orderId = o.orderId " +
            "JOIN Meal m ON m.mealId = om.meal.mealId " +
            "WHERE o.restaurant.restaurantId = ?1 AND o.orderStatus.statusName = 'requested'")
    List<RestaurantOrdersDTO> getOrdersByRestaurantId(Long restaurantId);

    @Query(value = "SELECT new com.masnaszama.model.views.OrdersDelivery " +
                    "(od.orderId, od.courierId, od.orderPrice, od.restoName, od.customerAddress, " +
                    " od.phonenumber, od.orderedTime, od.desiredDeliveryTime) " +
                    "FROM OrdersDelivery od " +
                    "WHERE od.courierId = ?1")
    List<OrdersDelivery> getOrdersToDeliverByCourierId(Long courierId);

    @Modifying
    @Transactional
    @Query("update Order o " +
            "set o.orderStatus.statusId = 4 " +
            "where o.orderId = ?1")
    void updateOrderStatus(Long orderId);

    @Modifying
    @Transactional
    @Query("update Order o " +
            "set o.orderStatus.statusId = 3 " +
            "where o.orderId = ?1")
    void setStatusToFinished(Long orderId);


}
