package com.example.atm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "punct_nav")
public class PunctNav {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, length = 10)
    private Long id;

    @Column(nullable = false)
    private String indicatif;
    @Column(nullable = false)
    private Double latitudine;

    @Column(nullable = false)
    private Double longitudine;
    @JsonIgnore
    @OneToMany(mappedBy = "punctEnd")
    private List<SegmentRuta> punctEndSegmenteRuta;
    @JsonIgnore
    @OneToMany(mappedBy = "punctStart")
    private List<SegmentRuta> punctStartSegmenteRuta;



    public PunctNav() {
    }

    public PunctNav(Long id, String indicatif, Double latitudine, Double longitudine, List<SegmentRuta> punctEndSegmenteRuta, List<SegmentRuta> punctStartSegmenteRuta) {
        this.id = id;
        this.indicatif = indicatif;
        this.latitudine = latitudine;
        this.longitudine = longitudine;
        this.punctEndSegmenteRuta = punctEndSegmenteRuta;
        this.punctStartSegmenteRuta = punctStartSegmenteRuta;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIndicatif() {
        return indicatif;
    }

    public void setIndicatif(String indicatif) {
        this.indicatif = indicatif;
    }

    public Double getLatitudine() {
        return latitudine;
    }

    public void setLatitudine(Double latitudine) {
        this.latitudine = latitudine;
    }

    public Double getLongitudine() {
        return longitudine;
    }

    public void setLongitudine(Double longitudine) {
        this.longitudine = longitudine;
    }

    public List<SegmentRuta> getPunctEndSegmenteRuta() {
        return punctEndSegmenteRuta;
    }

    public void setPunctEndSegmenteRuta(List<SegmentRuta> punctEndSegmenteRuta) {
        this.punctEndSegmenteRuta = punctEndSegmenteRuta;
    }

    public List<SegmentRuta> getPunctStartSegmenteRuta() {
        return punctStartSegmenteRuta;
    }

    public void setPunctStartSegmenteRuta(List<SegmentRuta> punctStartSegmenteRuta) {
        this.punctStartSegmenteRuta = punctStartSegmenteRuta;
    }
}
