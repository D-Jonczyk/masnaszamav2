package com.masnaszama.model.views;

import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Immutable
public class OrdersDelivery {
    @Id
    private Long orderId;
    private Long courierId;
    private Integer orderPrice;
    private String restoName;
    private String customerAddress;
    private Long phonenumber;

    private String orderedTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String desiredDeliveryTime = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());

    public OrdersDelivery(Long orderId, Long courierId, Integer orderPrice, String restoName,
                          String customerAddress, Long phonenumber, String orderedTime, String desiredDeliveryTime) {
        this.orderId = orderId;
        this.courierId = courierId;
        this.orderPrice = orderPrice;
        this.restoName = restoName;
        this.customerAddress = customerAddress;
        this.phonenumber = phonenumber;
        this.orderedTime = orderedTime;
        this.desiredDeliveryTime = desiredDeliveryTime;
    }

    public OrdersDelivery() {

    }

    public Long getOrderId() {
        return orderId;
    }

    public Long getCourierId() {
        return courierId;
    }

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public String getRestoName() {
        return restoName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public Long getPhonenumber() {
        return phonenumber;
    }

    public String getOrderedTime() {
        return orderedTime;
    }

    public String getDesiredDeliveryTime() {
        return desiredDeliveryTime;
    }
}
