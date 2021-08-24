package com.example.demo.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Service {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(nullable = false)
	private Integer id;
	
	@Column(nullable = false)
	private LocalDateTime orderDate;
	
	@Column(nullable = false)
	private LocalDateTime requestDate;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private String status;
	
	@ManyToOne
	@JoinColumn(name="userid",insertable=false,updatable=false)
	private User user;
	private Integer userid;
	
	
	public Service() {
		super();
	}
	public Service(Integer id, LocalDateTime orderDate, LocalDateTime requestDate, String address, String status,
			User user, Integer userid) {
		super();
		this.id = id;
		this.orderDate = orderDate;
		this.requestDate = requestDate;
		this.address = address;
		this.status = status;
		this.user = user;
		this.userid = userid;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDateTime getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}
	public LocalDateTime getRequestDate() {
		return requestDate;
	}
	public void setRequestDate(LocalDateTime requestDate) {
		this.requestDate = requestDate;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getStatus() {
		return this.status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@JsonBackReference
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	
	
	
}
