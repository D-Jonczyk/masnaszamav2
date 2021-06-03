package com.masnaszama.service;

import com.masnaszama.model.person.Person;
import com.masnaszama.model.person.PersonRequest;

public interface PersonService {
    Person findByPhonenumber(Long phoneNumber);
    Person save(PersonRequest personRequest);
}
