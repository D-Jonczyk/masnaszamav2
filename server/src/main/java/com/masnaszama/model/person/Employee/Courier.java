package com.masnaszama.model.person.Employee;

import com.masnaszama.model.order.Order;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Courier extends Employee {

    @Id
    private Long id;

    Integer averageDeliveryTime;
    Integer numberOfDeliveries;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "couriers_orders",
            joinColumns = @JoinColumn(name = "courier_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "order_id")
    )
    private Set<Order> orders = new HashSet<>();

    public Courier(){
    }

    public Courier(Long id, String firstName, String lastName, Long phoneNumber, Integer averageDeliveryTime, Integer numberOfDeliveries){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phonenumber = phoneNumber;
        this.averageDeliveryTime = averageDeliveryTime;
        this.numberOfDeliveries = numberOfDeliveries;
    }

    public Integer getAverageDeliveryTime() {
        return averageDeliveryTime;
    }

    public void setAverageDeliveryTime(Integer averageDeliveryTime) {
        this.averageDeliveryTime = averageDeliveryTime;
    }

    public Integer getNumberOfDeliveries() {
        return numberOfDeliveries;
    }

    public void setNumberOfDeliveries(Integer numberOfDeliveries) {
        this.numberOfDeliveries = numberOfDeliveries;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
