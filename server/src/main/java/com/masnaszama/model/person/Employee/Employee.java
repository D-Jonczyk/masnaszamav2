package com.masnaszama.model.person.Employee;

import com.masnaszama.model.person.Person;
import com.masnaszama.model.schedule.Schedule;
import com.masnaszama.model.schedule.Timesheet;
import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "employee")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Employee extends Person {

    @ManyToMany(cascade = { CascadeType.ALL})
    @JoinTable(
            name = "employees_schedules",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "schedule_id")}
    )
    Set<Schedule> schedules = new HashSet<>();

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "employees_timesheets",
            joinColumns = { @JoinColumn(name = "person_id")},
            inverseJoinColumns = { @JoinColumn(name = "timesheet_id")}
    )
    Set<Timesheet> timesheets = new HashSet<>();
}
