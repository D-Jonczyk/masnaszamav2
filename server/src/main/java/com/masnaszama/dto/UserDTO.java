package com.masnaszama.dto;

public class UserDTO {
    private final String userName;
    private final String userPassword;
    private String userRole;

    public UserDTO(String userName, String password, String userRole) {
        this.userName = userName;
        this.userPassword = password;
        this.userRole = userRole;
    }

    public UserDTO(String userName, String userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;

    }

    public String getUserName(){return userName;}
    public String getUserPassword(){return userPassword;}
    public String getUserRole() {
        return userRole;
    }
    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}





