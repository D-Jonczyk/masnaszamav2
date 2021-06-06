package com.masnaszama.model.payment;

import com.masnaszama.model.order.Order;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "payment")
public class Payment {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "payment_id")
    private Long paymentId;

    public Payment() {

    }

//    public Payment(Long paymentId) {
//        this.paymentId = paymentId;
//    }

    public Payment(Long paymentId, Order orders, Date paymentDate) {
        this.paymentId = paymentId;
        this.order = orders;
        this.paymentDate = paymentDate;
    }

    @OneToOne(mappedBy="payment")
    private Order order;

    private Date paymentDate;

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Order getOrders() {
        return order;
    }

    public void setOrders(Order orders) {
        this.order = orders;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }


}
