package com.example.atm.repository;

import com.example.atm.model.Aeroport;
import com.example.atm.model.PlanZbor;
import com.example.atm.model.PunctNav;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PunctNavRepository extends JpaRepository<PunctNav, String> {
    Optional<PunctNav> findById(Long id);
    PunctNav save(PunctNav punctNav);
    void deleteById(Long id);
}
