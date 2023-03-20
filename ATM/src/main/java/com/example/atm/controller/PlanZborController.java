package com.example.atm.controller;

import com.example.atm.repository.PlanZborRepository;
import com.example.atm.model.PlanZbor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/planurizbor")
public class PlanZborController {

    PlanZborRepository planZborRepository;

    public PlanZborController(PlanZborRepository planZborRepository) {
        this.planZborRepository = planZborRepository;
    }

    @GetMapping("")
    public Iterable<PlanZbor> getPlanuriZbor() { return planZborRepository.findAll(); }

    @GetMapping("/{id}")
    public PlanZbor getPlanZbor(@PathVariable("id") Long id) { return planZborRepository.findById(id).get();}

    @PostMapping("")
    public PlanZbor addPlanZbor(@RequestBody PlanZbor planZbor){
        return planZborRepository.save(planZbor);
    }


    @Transactional
    @DeleteMapping("/{id}")
    public void deletePlanZbor(@PathVariable("id") Long id) {
        planZborRepository.deleteById(id);
    }
}
