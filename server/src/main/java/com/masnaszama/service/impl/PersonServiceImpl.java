package com.masnaszama.service.impl;

import com.masnaszama.model.person.Person;
import com.masnaszama.model.person.PersonRequest;
import com.masnaszama.repository.PersonRepository;
import com.masnaszama.repository.UserRepository;
import com.masnaszama.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;
    private final UserRepository userRepository;

    @Autowired
    public PersonServiceImpl(PersonRepository personRepository, UserRepository userRepository) {
        this.personRepository = personRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Person findByPhonenumber(Long phoneNumber) throws UsernameNotFoundException {
        return personRepository.findByPhonenumber(phoneNumber).orElse(null);
    }

    @Override
    public Person save(PersonRequest personRequest) {
        Person person = new Person();
        person.setId(personRequest.getId());
        person.setFirstName(personRequest.getFirstName());
        person.setLastName(personRequest.getLastName());
        person.setPhonenumber(personRequest.getPhonenumber());
        return personRepository.save(person);
    }
}
