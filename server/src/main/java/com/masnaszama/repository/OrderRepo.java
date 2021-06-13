package com.masnaszama.repository;

import com.masnaszama.dto.OrderMealsDTO;
import com.masnaszama.dto.OrdersDTO;
import com.masnaszama.dto.RestaurantOrdersDTO;
import com.masnaszama.dto.UserOrdersDTO;
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

    @Query(value = "SELECT new com.masnaszama.dto.UserOrdersDTO" +
            "(o.orderId, o.desiredDeliveryTime, o.orderPrice, o.orderedTime, o.tip," +
            " o.customer.id, o.orderStatus.statusId, o.restaurant.restaurantId, o.restaurant.restaurantName," +
            " o.address.addressId, o.comment) " +
            "FROM Order o " +
            "WHERE o.customer.id = ?1")
    List<UserOrdersDTO> getOrderByUserId(Long customerId);

    @Query(value = "SELECT new com.masnaszama.dto.OrderMealsDTO" +
            "(o.meal.mealName, o.opinion.opinionComment, o.opinion.rating) " +
            "FROM OrdersMeals o " +
            "WHERE o.order.orderId = ?1")
    List<OrderMealsDTO> getOpinionMealsByOrderId(Long orderId);
     //Work fine
    @Query(value = "SELECT new com.masnaszama.dto.RestaurantOrdersDTO" +
                    "(o.orderId, m.mealName) " +
            "FROM Order o " +
            "JOIN OrdersMeals om ON om.order.orderId = o.orderId " +
            "JOIN Meal m ON m.mealId = om.meal.mealId " +
            "WHERE o.restaurant.restaurantId = ?1")
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

}
