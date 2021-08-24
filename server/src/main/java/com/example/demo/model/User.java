package com.example.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false,unique=true)
	private String email;
	
	@Column(nullable = false)
	private String number;
	
	private String password;
	
	@OneToMany(mappedBy="user")
	private List<Service> services;
	
	@OneToMany(mappedBy="user")
	private List<Service> reviews;
	
//	private final String role = "ROLE_USER";
	
	public String getNumber() {
		return this.number;
	}

	public void setNumber(String number) {
		this.number = number;
	}
	@JsonManagedReference
	public List<Service> getReviews() {
		return this.reviews;
	}

	public void setReviews(List<Service> reviews) {
		this.reviews = reviews;
	}

	public User() {
		super();
	}
	
	public User(String name, String email, String number,String password) {
		super();
		this.name = name;
		this.email = email;
		this.number = number;
		this.password =password;
	}
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNummber() {
		return this.number;
	}
	public void setNummber(String nummber) {
		this.number = nummber;
	}

	@JsonManagedReference
	public List<Service> getServices() {
		return this.services;
	}

	public void setServices(List<Service> services) {
		this.services = services;
	}
//	public String getRole() {
//		return this.role;
//	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
