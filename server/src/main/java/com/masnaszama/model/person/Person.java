package com.masnaszama.model.person;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.masnaszama.model.User;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
@Polymorphism(type = PolymorphismType.EXPLICIT)
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Person implements Serializable {

    @SequenceGenerator(
            name = "person_sequence",
            sequenceName = "person_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_sequence"
    )
    private Long id;

    @Column(nullable = false)
    protected String firstName;
    protected String lastName;
    @Column(nullable = false)
    protected Long phonenumber;

    @JsonManagedReference
    @OneToMany(mappedBy = "person", cascade = CascadeType.ALL)
    private Set<User> userAccounts = new HashSet<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public Long getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(Long phoneNumber) {
        this.phonenumber = phoneNumber;
    }
    public Set<User> getUserAccounts() {
        return userAccounts;
    }
    public void setUserAccounts(Set<User> userAccounts) {
        this.userAccounts = userAccounts;
    }
}
