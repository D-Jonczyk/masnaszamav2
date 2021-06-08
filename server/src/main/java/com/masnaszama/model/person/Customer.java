package com.masnaszama.model.person;

import com.masnaszama.model.address.Address;
import com.masnaszama.model.order.Order;
import com.masnaszama.model.restaurant.Restaurant;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customer")
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Customer extends Person{

    public Customer() { super(); }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", nullable = false, referencedColumnName = "address_id")
    private Address address;

    @OneToMany(mappedBy="customer", fetch = FetchType.EAGER)
    private Set<Order> orders;

    public Customer(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

}
