package com.example.atm.repository;
import com.example.atm.model.Aeroport;
import com.example.atm.model.PlanZbor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlanZborRepository extends JpaRepository<PlanZbor, String> {
    Optional<PlanZbor> findById(Long id);
    PlanZbor save(PlanZbor planZbor);
    void deleteById(Long id);
}
