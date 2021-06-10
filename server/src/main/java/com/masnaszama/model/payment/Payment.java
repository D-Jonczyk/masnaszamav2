package com.masnaszama.model.payment;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.masnaszama.model.order.Order;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "payment_id")
    private Long paymentId;

    @JsonManagedReference
    @OneToOne(mappedBy="payment", cascade = CascadeType.ALL, orphanRemoval = true)
    private Order order;

    public Payment() {

    }

    public Payment(Long paymentId, Order orders, Date paymentDate) {
        this.paymentId = paymentId;
        this.order = orders;
        this.paymentDate = paymentDate;
    }

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
