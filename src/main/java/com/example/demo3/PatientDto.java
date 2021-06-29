package com.example.demo3;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class PatientDto {
    private long id;
    private String firstname;
    private String lastname;
    private String gender;
    private String country;
    private String state;
    private String city;
    private String birth;
    private int age;
}
