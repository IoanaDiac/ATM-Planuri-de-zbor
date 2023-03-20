package com.example.atm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "zbor")
public class Zbor {

    @Id
    @Column(name = "id")
    private Long id;

    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aeroport_start")
    private Aeroport aeroportStart;

    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aeroport_end")
    private Aeroport aeroportEnd;

    @Column(name = "etd")
    @DateTimeFormat(pattern = "yyyy-mm-dd hh:mm:ss")
    private Date etd;

    @Column(name = "eta")
    @DateTimeFormat(pattern = "yyyy-mm-dd hh:mm:ss")
    private Date eta;
    @Column(name = "indicativ")
    private String indicativ;
    @Column(name = "avion")
    private String avion;
    @Column(name = "companie")
    private String companie;

    @JsonIgnore
    @OneToMany(mappedBy = "zbor")
    private List<PlanZbor> zborPlanuriZbor;


    public Zbor() {
    }

    public Zbor(Long id, Aeroport aeroportStart, Aeroport aeroportEnd, Date etd, Date eta, String indicativ, String avion, String companie) {
        this.id = id;
        this.aeroportStart = aeroportStart;
        this.aeroportEnd = aeroportEnd;
        this.etd = etd;
        this.eta = eta;
        this.indicativ = indicativ;
        this.avion = avion;
        this.companie = companie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Aeroport getAeroportStart() {
        return aeroportStart;
    }

    public List<PlanZbor> getZborPlanuriZbor() {
        return zborPlanuriZbor;
    }

    public void setZborPlanuriZbor(List<PlanZbor> zborPlanuriZbor) {
        this.zborPlanuriZbor = zborPlanuriZbor;
    }

    public void setAeroportStart(Aeroport aeroportStart) {
        this.aeroportStart = aeroportStart;
    }

    public Aeroport getAeroportEnd() {
        return aeroportEnd;
    }

    public void setAeroportEnd(Aeroport aeroportEnd) {
        this.aeroportEnd = aeroportEnd;
    }

    public Date getEtd() {
        return etd;
    }

    public void setEtd(Date etd) {
        this.etd = etd;
    }

    public Date getEta() {
        return eta;
    }

    public void setEta(Date eta) {
        this.eta = eta;
    }

    public String getIndicativ() {
        return indicativ;
    }

    public void setIndicativ(String indicativ) {
        this.indicativ = indicativ;
    }

    public String getAvion() {
        return avion;
    }

    public void setAvion(String avion) {
        this.avion = avion;
    }

    public String getCompanie() {
        return companie;
    }

    public void setCompanie(String companie) {
        this.companie = companie;
    }

    public void setIdPanuriZbor(final List<PlanZbor> zborPlanuriZbor) {
        this.zborPlanuriZbor = zborPlanuriZbor;
    }
}
