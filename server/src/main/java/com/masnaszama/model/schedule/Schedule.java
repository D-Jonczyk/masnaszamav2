package com.masnaszama.model.schedule;


import com.masnaszama.model.person.Coordinator;
import com.masnaszama.model.person.Employee.Employee;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long scheduleId;

    private String dateCreated = new java.text.SimpleDateFormat("dd-MM-yyyy").format(new java.util.Date());
    private String startTime = new java.text.SimpleDateFormat("HH:mm:ss").format(new java.util.Date());
    private String endTime = new java.text.SimpleDateFormat("HH:mm:ss").format(new java.util.Date());
    private String fullDate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    private String otherDetails;
    private Integer weekNumber;

    public Schedule(){
        super();
    }

    public Schedule(String startTime){
        this.startTime = startTime;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getOtherDetails() {
        return otherDetails;
    }

    public void setOtherDetails(String otherDetails) {
        this.otherDetails = otherDetails;
    }

    public String getFullDate() {
        return fullDate;
    }

    public void setFullDate(String fullDate) {
        this.fullDate = fullDate;
    }
}
