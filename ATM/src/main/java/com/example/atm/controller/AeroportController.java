package com.example.atm.controller;

import com.example.atm.model.Aeroport;
import com.example.atm.repository.AeroportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/aeroporturi")
public class AeroportController {
    @Autowired
    AeroportRepository aeroportRepository;

    public AeroportController(AeroportRepository aeroportRepository) {
        this.aeroportRepository = aeroportRepository;
    }

    @GetMapping("")
    public List<Aeroport> getAeroporturi() {
        return aeroportRepository.findAll();
    }

    @GetMapping("/list")
    public Page<Aeroport> showPage(@RequestParam(defaultValue = "0") int page){
        return aeroportRepository.findAll(PageRequest.of(page, 4));
    }


    @GetMapping("/{id}")
    public Aeroport getAeroporturi(@PathVariable("id") Long id) {
        return aeroportRepository.findById(id).get();
    }

    @PostMapping("")
    public Aeroport addAeroport(@RequestBody Aeroport aeroport){
        return aeroportRepository.save(aeroport);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public String deleteAeroport(@PathVariable("id") Long id) {
        aeroportRepository.deleteById(id);
        return "Deleted";
    }
}
