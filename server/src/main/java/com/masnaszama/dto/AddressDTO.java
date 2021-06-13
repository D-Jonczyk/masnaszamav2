package com.masnaszama.dto;

public class AddressDTO {

    private final String city;
    private final Integer flatNumber;
    private final String street;

    public AddressDTO(String city,Integer flatNumber, String street ) {
        this.city = city;
        this.flatNumber = flatNumber;
        this.street = street;
    }

    public String getCity() {
        return city;
    }
    public Integer getFlatNumber() {
        return flatNumber;
    }
    public String getStreet() {
        return street;
    }

}