package com.example.atm.controller;

import com.example.atm.repository.SegmentRutaRepository;
import com.example.atm.model.SegmentRuta;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/segmenteruta")
public class SegmentRutaController {

    SegmentRutaRepository segmentRutaRepository;

    public SegmentRutaController(SegmentRutaRepository segmentRutaRepository) {
        this.segmentRutaRepository = segmentRutaRepository;
    }

    @GetMapping("")
    public Iterable<SegmentRuta> getSegmenteRuta() { return segmentRutaRepository.findAll(); }

    @GetMapping("/{id}")
    public SegmentRuta getSegmentRuta(@PathVariable("id") Long id) { return segmentRutaRepository.findById(id).get();}

    @PostMapping("")
    public SegmentRuta addSegmentRuta(@RequestBody SegmentRuta segmentRuta){
        return segmentRutaRepository.save(segmentRuta);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deleteSegmentRuta(@PathVariable("id") Long id) {
        segmentRutaRepository.deleteById(id);
    }

}
