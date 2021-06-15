package com.masnaszama.repository;

import com.masnaszama.model.person.Employee.Courier;
import com.masnaszama.model.views.CourierSchedules;
import com.masnaszama.model.views.OrdersFinished;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CourierRepo extends CrudRepository<Courier, Long> {
    void deleteCourierById(Long personId);

    Courier findCourierByPhonenumber(Long phonenumber);
    Courier findCourierById(Long id);


    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE Courier c " +
            "set c.numberOfDeliveries = c.numberOfDeliveries + 1" +
            "where c.id = ?1 " )
    void increaseNumberOfDeliveries(Long courierId);

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

    @Modifying
    @Transactional
    @Query(value = "UPDATE courier c SET c.last_name=?1, c.phonenumber=?2, c.first_name=?3 WHERE c.id=?4", nativeQuery = true)
    void updateCourier(String lastName, Long phonenumber, String firstName, Long id);

}
