package com.masnaszama.dto;

public class OrderMealsDTO {

    private final String mealName;
    private final String opinionComment;
    private final Integer rating;

    public OrderMealsDTO(String mealName, String opinionCommen, Integer rating) {
        this.mealName = mealName;
        this.opinionComment = opinionCommen;
        this.rating = rating;
    }

    public String getMealName() {
        return mealName;
    }
    public String getOpinionComment() {
        return opinionComment;
    }
    public Integer getRating() {
        return rating;
    }
}