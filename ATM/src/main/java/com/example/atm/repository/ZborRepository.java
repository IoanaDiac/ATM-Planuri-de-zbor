package com.example.atm.repository;

import com.example.atm.model.Zbor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ZborRepository extends JpaRepository<Zbor, String> {
    Optional<Zbor> findById(Long id);
    Zbor save(Zbor zbor);
    void deleteById(Long id);
}
