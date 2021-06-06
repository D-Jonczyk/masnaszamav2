package com.masnaszama.repository;

import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.CourierSchedules;
import com.masnaszama.model.views.OrdersFinished;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CourierRepo extends CrudRepository<Courier, Long> {
    void deleteCourierById(Long personId);

    @Query(value = "SELECT new com.masnaszama.model.person.Employee.Courier" +
    "(c.firstName, c.lastName, c.phonenumber, c.averageDeliveryTime, c.numberOfDeliveries ) " +
    "FROM Courier c " +
    "WHERE c.id = ?1")
    Optional<Courier> findCourierById(Long personId);

    @Query(value = "SELECT new com.masnaszama.model.views.CourierSchedules " +
            "(cs.scheduleId, cs.startTime, cs.endTime, cs.fullDate, cs.courierId) " +
            "FROM CourierSchedules cs " +
            "WHERE cs.courierId = ?1 AND cs.weekNumber = ?2 ")
    List<CourierSchedules> getCourierSchedule(Long courierId, Integer weekNumber);

    @Query(value = "SELECT new com.masnaszama.model.views.OrdersFinished " +
            "(od.orderId, od.courierId, od.orderPrice, od.restoName, od.customerAddress, " +
            " od.phonenumber, od.orderedTime, od.desiredDeliveryTime, od.deliveredTime ) " +
            "FROM OrdersFinished od " +
            "WHERE od.courierId = ?1")
    List<OrdersFinished> getDeliveryHistory(Long courierId);
}
