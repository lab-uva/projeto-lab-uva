package com.api.labuva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class LabuvaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LabuvaApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return "Olá mundo";
	}
}
