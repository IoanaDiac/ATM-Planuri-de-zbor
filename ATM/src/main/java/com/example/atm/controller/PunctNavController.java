package com.example.atm.controller;

import com.example.atm.repository.PunctNavRepository;
import com.example.atm.model.PunctNav;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/punctenav")
public class PunctNavController {

    PunctNavRepository punctNavRepository;

    public PunctNavController(PunctNavRepository punctNavRepository) {
        this.punctNavRepository = punctNavRepository;
    }

    @GetMapping("")
    public Iterable<PunctNav> getPuncteNav() { return punctNavRepository.findAll(); }

    @GetMapping("/{id}")
    public PunctNav getPunctNav(@PathVariable("id") Long id) { return punctNavRepository.findById(id).get();}

    @PostMapping("")
    public PunctNav addPunctNav(@RequestBody PunctNav punctNav){
        return punctNavRepository.save(punctNav);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletePunctNav(@PathVariable("id") Long id) {
        punctNavRepository.deleteById(id);
    }
}
