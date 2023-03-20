package com.example.atm.repository;

import com.example.atm.model.Aeroport;
import com.example.atm.model.Zbor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

@Repository
public interface AeroportRepository extends JpaRepository<Aeroport, Long> {
    Optional<Aeroport> findById(Long id);
    Aeroport save(Aeroport aeroport);
    void deleteById(Long id);


}
