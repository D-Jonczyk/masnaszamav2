package com.masnaszama.model.payment;

import com.masnaszama.model.order.Order;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "payment")
public class Payment {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private Long paymentId;

    public Payment() {

    }

//    public Payment(Long paymentId) {
//        this.paymentId = paymentId;
//    }

    public Payment(Long paymentId, Order orders, Date paymentDate) {
        this.paymentId = paymentId;
        this.orders = orders;
        this.paymentDate = paymentDate;
    }

    @OneToOne(mappedBy="payment")
    private Order orders;

    private Date paymentDate;

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Order getOrders() {
        return orders;
    }

    public void setOrders(Order orders) {
        this.orders = orders;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }


}
