package com.masnaszama.repository;


import com.masnaszama.model.order.Meal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MealRepo extends CrudRepository<Meal, Long> {
    
}
