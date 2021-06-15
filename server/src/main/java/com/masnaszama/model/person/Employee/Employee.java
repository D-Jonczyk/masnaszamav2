package com.masnaszama.model.person.Employee;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.masnaszama.model.person.Person;
import com.masnaszama.model.restaurant.Restaurant;
import com.masnaszama.model.schedule.Schedule;
import com.masnaszama.model.schedule.Timesheet;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "employee")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Employee extends Person {
    @Id
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "employees_schedules",
            joinColumns = { @JoinColumn(name = "person_id", referencedColumnName = "id")},
            inverseJoinColumns = { @JoinColumn(name = "schedule_id", referencedColumnName = "scheduleId")}
    )
    Set<Schedule> schedules = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "employees_timesheets",
            joinColumns = { @JoinColumn(name = "person_id", referencedColumnName = "id")},
            inverseJoinColumns = { @JoinColumn(name = "timesheet_id", referencedColumnName = "timesheetId")}
    )
    Set<Timesheet> timesheets = new HashSet<>();

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="restaurant_id")//, nullable=false)
    private Restaurant myRestaurant;

    public Set<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(Set<Schedule> schedules) {
        this.schedules = schedules;
    }

    public Set<Timesheet> getTimesheets() {
        return timesheets;
    }

    public void setTimesheets(Set<Timesheet> timesheets) {
        this.timesheets = timesheets;
    }

    public Restaurant getMyRestaurant() {
        return myRestaurant;
    }

    public void setMyRestaurant(Restaurant myRestaurant) {
        this.myRestaurant = myRestaurant;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
