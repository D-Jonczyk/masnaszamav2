package com.masnaszama.model.person;

import com.masnaszama.model.request.Request;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Admin extends Person{

    @OneToMany(mappedBy = "admin")
    private Set<Request> request = new HashSet<>();

    public Set<Request> getRequest() {
        return request;
    }

    public void setRequest(Set<Request> request) {
        this.request = request;
    }
}
