package com.masnaszama.model.request;

import com.masnaszama.model.order.Meal;
import com.masnaszama.model.person.Admin;
import org.hibernate.type.StringType;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Request {
    @Id
    private Long requestId;
    Date requestDate;
    StringType requestCommentary;
    Integer requestStatus;

    @ManyToOne
    @JoinColumn (name= "admin_id", nullable=false)
    private Admin admin;

}
