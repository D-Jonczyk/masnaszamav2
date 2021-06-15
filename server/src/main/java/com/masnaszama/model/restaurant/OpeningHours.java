package com.masnaszama.model.restaurant;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Time;

@Entity
public class OpeningHours {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long opening_hours_id;

    @JsonManagedReference
    @OneToOne(mappedBy = "openingHours", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Restaurant restaurant;

    private int day;
    private Time open_hour;
    private Time close_hour;

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public Time getOpen_hour() {
        return open_hour;
    }

    public void setOpen_hour(Time open_hour) {
        this.open_hour = open_hour;
    }

    public Time getClose_hour() {
        return close_hour;
    }

    public void setClose_hour(Time close_hour) {
        this.close_hour = close_hour;
    }
}
