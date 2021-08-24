package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Service;
@CrossOrigin(origins="*",maxAge=3600)
@RestController
@RequestMapping("/api/service")
public class ServiceController {
	
	@GetMapping("/accepted")
	public List<Service> getAcceptedServices(){
		return null;
	}
	
	@GetMapping("/user/{id}/service")
	public List<Service> getServicesByUserId(@PathVariable Integer id ){
		return null;
	}

	@GetMapping("/pending")
	public List<Service> getPendingServices(){
		return null;
	}
	
	@GetMapping("/finished")
	public List<Service> getFinishedServices(){
		return null;
	}
	@PostMapping("/addNew")
	public void addService(@RequestBody Service service) {
		
	}
	@PutMapping("/{id}/update")
	public void updateService(@RequestBody Service service) {
		
	}
	
}
