package com.masnaszama.model.order;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long opinionId;


    @JsonManagedReference(value = "opinion")
    @OneToOne(mappedBy="opinion", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private OrdersMeals ordersMeals;

    private int rating;
    private String opinionComment;

    public Long getOpinionId() {
        return opinionId;
    }

    public void setOpinionId(Long opinionId) {
        this.opinionId = opinionId;
    }

    public OrdersMeals getOrdersMeals() {
        return ordersMeals;
    }

    public void setOrdersMeals(OrdersMeals ordersMeals) {
        this.ordersMeals = ordersMeals;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getOpinionComment() {
        return opinionComment;
    }

    public void setOpinionComment(String opinionComment) {
        this.opinionComment = opinionComment;
    }
}
