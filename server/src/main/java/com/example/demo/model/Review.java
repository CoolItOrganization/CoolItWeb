package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Review {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false)
	private String review;
	
	@ManyToOne
	@JoinColumn(name="userid",insertable=false,updatable=false)
	private User user;
	private Integer userid;
	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Review() {
		super();
	}


	public Review(Integer id, String review, User user, Integer userid) {
		super();
		this.id = id;
		this.review = review;
		this.user = user;
		this.userid = userid;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getReview() {
		return review;
	}


	public void setReview(String review) {
		this.review = review;
	}


	public Integer getUserid() {
		return userid;
	}


	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	
	
	
	
}
