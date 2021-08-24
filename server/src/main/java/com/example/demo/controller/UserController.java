package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;

@CrossOrigin(origins="*",maxAge=3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

	@GetMapping("/all")
	public List<User> getAllUsers(){
		return null;
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable Integer id ){
		return null;
	}
	@PutMapping("/users/{id}/update")
	public void UpdateUser(@RequestBody User user) {
//		userService.UpdateUser(user);
	}
}
