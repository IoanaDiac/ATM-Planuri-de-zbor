package com.example.atm.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "plan_zbor")
public class PlanZbor {
    @Id
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column
    private Integer fl1;

    @Column
    private Integer fl2;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_zbor", nullable = false)
    private Zbor zbor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "segment_ruta_id", nullable = false)
    private SegmentRuta segmentRuta;

    public PlanZbor(Long id, Integer fl1, Integer fl2, Zbor zbor, SegmentRuta segmentRuta) {
        this.id = id;
        this.fl1 = fl1;
        this.fl2 = fl2;
        this.zbor = zbor;
        this.segmentRuta = segmentRuta;
    }

    public PlanZbor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getFl1() {
        return fl1;
    }

    public void setFl1(Integer fl1) {
        this.fl1 = fl1;
    }

    public Integer getFl2() {
        return fl2;
    }

    public void setFl2(Integer fl2) {
        this.fl2 = fl2;
    }

    public Zbor getZbor() {
        return zbor;
    }

    public void setZbor(Zbor zbor) {
        this.zbor = zbor;
    }

    public SegmentRuta getSegmentRuta() {
        return segmentRuta;
    }

    public void setSegmentRuta(SegmentRuta segmentRuta) {
        this.segmentRuta = segmentRuta;
    }
}
