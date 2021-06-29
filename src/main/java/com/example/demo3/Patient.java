package com.example.demo3;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Patient {
    private @Id @GeneratedValue Long id;
    private String firstname;
    private String lastname;
    private String gender;
    private String country;
    private String state;
    private String city;
    private String birth;
    private int age;

    @OneToMany(mappedBy = "patient")
    private List<Comments> comments = new ArrayList<>();
}
