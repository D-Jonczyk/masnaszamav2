package com.masnaszama.model.person;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.masnaszama.model.address.Address;
import com.masnaszama.model.order.Order;
import com.masnaszama.model.restaurant.Restaurant;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customer")
public class Customer extends Person{

    @Id
    private Long id;

    public Customer() { super(); }



    @JsonManagedReference
    @OneToMany(mappedBy="customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Order> orders;

    public Customer(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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
