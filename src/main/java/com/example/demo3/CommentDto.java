package com.example.demo3;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;


@Data
@Getter
@Setter
public class CommentDto {
    private String comment;
    private long patient_id;
    private ZonedDateTime date;
}
