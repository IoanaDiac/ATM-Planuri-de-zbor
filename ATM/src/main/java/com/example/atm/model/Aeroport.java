package com.example.atm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "Aeroport")
public class Aeroport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, updatable = false, length = 4)
    private String nume;

    @Column(nullable = false, length = 20)
    private String tara;

    @Column(nullable = false)
    private Double latitudine;

    @Column(nullable = false)
    private Double longitudine;
    @JsonIgnore
    @OneToMany(mappedBy = "aeroportStart")
    private List<Zbor> aeroportStartZboruri;
    @JsonIgnore
    @OneToMany(mappedBy = "aeroportEnd")
    private List<Zbor> aeroportEndZboruri;

    public Aeroport(){}

    public Aeroport(Long id, String nume, String tara, Double latitudine, Double longitudine, List<Zbor> aeroportStartZboruri, List<Zbor> aeroportEndZboruri) {
        this.id = id;
        this.nume = nume;
        this.tara = tara;
        this.latitudine = latitudine;
        this.longitudine = longitudine;
        this.aeroportStartZboruri = aeroportStartZboruri;
        this.aeroportEndZboruri = aeroportEndZboruri;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public List<Zbor> getAeroportStartZboruri() {
        return aeroportStartZboruri;
    }

    public void setAeroportStartZboruri(List<Zbor> aeroportStartZboruri) {
        this.aeroportStartZboruri = aeroportStartZboruri;
    }

    public List<Zbor> getAeroportEndZboruri() {
        return aeroportEndZboruri;
    }

    public void setAeroportEndZboruri(List<Zbor> aeroportEndZboruri) {
        this.aeroportEndZboruri = aeroportEndZboruri;
    }

    public String getTara() {
        return tara;
    }

    public void setTara(String tara) {
        this.tara = tara;
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


}
