package com.example.demo3;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@AllArgsConstructor
public class PatientController {

  private final PatientRepository  repository;

  @PostMapping("patientLoad")
  public Patient newPatient(@RequestBody Patient newPatient) {
    return repository.save(newPatient);
  }

  @GetMapping("patientLoad")
  public List<Patient> patientLoad () {
    return repository.findAll();
  }

  @GetMapping("patientLoad/{id}")
  public Patient getPatient(@PathVariable Long id) {
    return repository.findById(id).get();
  }

  @PutMapping("patientLoad/{id}")
  public Patient patient(@RequestBody PatientDto patientDto, @PathVariable("id") Long id) {
    Patient patient = repository.findById(id).get();
    patient.setFirstname(patientDto.getFirstname());
    patient.setLastname(patientDto.getLastname());
    patient.setAge(patientDto.getAge());
    patient.setBirth(patientDto.getBirth());
    patient.setCountry(patientDto.getBirth());
    patient.setState(patientDto.getState());
    patient.setCity(patientDto.getCity());
    return repository.save(patient);
  }

  @DeleteMapping("patientLoad/{id}")
  public void patient(@PathVariable("id") Long id) {
    repository.deleteById(id);
  }
}
