package com.example.atm.controller;

import com.example.atm.repository.ZborRepository;
import com.example.atm.model.Zbor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/zboruri")
public class ZborController {

    ZborRepository zborRepository;

    public ZborController(ZborRepository zborRepository) {
        this.zborRepository = zborRepository;
    }

    @GetMapping("")
    public Iterable<Zbor> getZboruri() { return zborRepository.findAll(); }

    @GetMapping("/{id}")
    public Zbor getZbor(@PathVariable("id") Long id) { return zborRepository.findById(id).get();}

    @PostMapping("")
    public Zbor addZbor(@RequestBody Zbor zbor){
        return zborRepository.save(zbor);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public String deleteZbor(@PathVariable("id") Long id) {
        zborRepository.deleteById(id);
        return "Deleted";
    }
}

