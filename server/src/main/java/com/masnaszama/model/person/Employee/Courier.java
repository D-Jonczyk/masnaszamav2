package com.masnaszama.model.person.Employee;

import com.masnaszama.model.order.Order;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Courier extends Employee {
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
        this.setId(id);
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
}
