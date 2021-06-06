package com.masnaszama.model.person;

import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.Entity;

@Entity
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Chief extends Person{


}
