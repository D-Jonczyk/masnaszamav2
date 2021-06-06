package com.masnaszama.model.person;

import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;

@Entity
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Coordinator extends Person{
}
