package com.example.demo3;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@AllArgsConstructor
public class CommentsController {
    private final CommentsRepository repository;
    private final PatientRepository patientRepository;

    @CrossOrigin(origins = "*")
    @PostMapping("createComment")
    public Comments newPatient(@RequestBody CommentDto newComments) {
        Comments comments = Comments.builder()
                .Comment(newComments.getComment())
                .patient(patientRepository.getById(newComments.getPatient_id()))
                .date(newComments.getDate())
                .build();
        return repository.save(comments);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("commentsLoad")
    public List<Comments> commentsLoad () {
        return repository.findAll();
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("commentsLoad/{id}")
    public void Comments(@PathVariable("id") Long id) {
        repository.deleteById(id);
    }

}
