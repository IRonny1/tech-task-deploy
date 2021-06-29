package com.example.demo3;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.ZonedDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Comments {
    private @Id @GeneratedValue Long id;
    private String Comment;
    private ZonedDateTime date;
    @JsonIgnore
    @ManyToOne
    private Patient patient;
}
