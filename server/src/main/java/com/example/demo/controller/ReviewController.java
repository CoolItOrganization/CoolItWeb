package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Review;

@CrossOrigin(origins="*",maxAge=3600)
@RestController
@RequestMapping("/api/review")
public class ReviewController {
	
	@GetMapping("/all")
	public List<Review> getAllReview(){
		return null;
	}
	@GetMapping("/user/{id}/review")
	public List<Review> getReviewsByUserId(@PathVariable Integer id ){
		return null;
	}
	@PostMapping("/addNew")
	public void addReview(@RequestBody Review review) {
		
	}
	@PutMapping("/{id}/update")
	public void updateReview(@RequestBody Review review) {	
	}
	@DeleteMapping("/{id}")
	public void deleteReview(@PathVariable Integer id ) {
		
	}
}
