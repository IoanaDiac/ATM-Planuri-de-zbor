package com.example.atm;

import com.example.atm.model.Aeroport;
import com.example.atm.model.Zbor;
import com.example.atm.repository.AeroportRepository;
import com.example.atm.repository.ZborRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.text.SimpleDateFormat;
import java.util.stream.Stream;

@SpringBootApplication
public class AtmApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtmApplication.class, args);
    }




}
