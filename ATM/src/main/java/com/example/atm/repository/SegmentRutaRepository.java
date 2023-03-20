package com.example.atm.repository;

import com.example.atm.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SegmentRutaRepository extends JpaRepository<SegmentRuta, String> {
    Optional<SegmentRuta> findById(Long id);
    SegmentRuta save(SegmentRuta segmentRuta);
    void deleteById(Long id);
}
