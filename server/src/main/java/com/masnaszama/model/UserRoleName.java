package com.masnaszama.model;

public enum UserRoleName {
    ROLE_USER("ROLE_USER"),
    ROLE_COURIER("ROLE_COURIER"),
    ROLE_ADMIN("ROLE_ADMIN"),
    ROLE_EMPLOYEE("ROLE_EMPLOYEE"),
    FACEBOOK_USER("FACEBOOK_USER");

    public final String label;

    UserRoleName(String label) {
        this.label = label;
    }
}
