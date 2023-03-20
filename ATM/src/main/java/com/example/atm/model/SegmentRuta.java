package com.example.atm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.util.List;
@Entity
@Table(name = "segment_ruta")
public class SegmentRuta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false)
    private String indicativ;

    @Column(nullable = false)
    private Double distanta;
    @JsonIgnore
    @OneToMany(mappedBy = "segmentRuta")
    private List<PlanZbor> segmentRutaPlanuriZbor;
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "punct_end_id", nullable = false)
    private PunctNav punctEnd;
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "punct_start_id", nullable = false)
    private PunctNav punctStart;

    public SegmentRuta(Long id, String indicativ, Double distanta, List<PlanZbor> segmentRutaPlanuriZbor, PunctNav punctEnd, PunctNav punctStart) {
        this.id = id;
        this.indicativ = indicativ;
        this.distanta = distanta;
        this.segmentRutaPlanuriZbor = segmentRutaPlanuriZbor;
        this.punctEnd = punctEnd;
        this.punctStart = punctStart;
    }

    public SegmentRuta() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIndicativ() {
        return indicativ;
    }

    public void setIndicativ(String indicativ) {
        this.indicativ = indicativ;
    }

    public List<PlanZbor> getSegmentRutaPlanuriZbor() {
        return segmentRutaPlanuriZbor;
    }

    public void setSegmentRutaPlanuriZbor(List<PlanZbor> segmentRutaPlanuriZbor) {
        this.segmentRutaPlanuriZbor = segmentRutaPlanuriZbor;
    }

    public Double getDistanta() {
        return distanta;
    }

    public void setDistanta(Double distanta) {
        this.distanta = distanta;
    }

    public List<PlanZbor> getSegmentRutaPanuriZbors() {
        return segmentRutaPlanuriZbor;
    }

    public void setSegmentRutaPanuriZbors(List<PlanZbor> segmentRutaPanuriZbors) {
        this.segmentRutaPlanuriZbor = segmentRutaPanuriZbors;
    }

    public PunctNav getPunctEnd() {
        return punctEnd;
    }

    public void setPunctEnd(PunctNav punctEnd) {
        this.punctEnd = punctEnd;
    }

    public PunctNav getPunctStart() {
        return punctStart;
    }

    public void setPunctStart(PunctNav punctStart) {
        this.punctStart = punctStart;
    }
}
