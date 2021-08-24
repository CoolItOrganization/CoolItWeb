package com.example.demo.security.Service;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.lang.Integer;


public class UserDetailsImp implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String email;
	private String password;
	private String name;
	private Collection<? extends GrantedAuthority> authorities;
	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	public  UserDetailsImp(Integer id, String email, String password,Collection<? extends GrantedAuthority> authorities,String name) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.authorities=authorities;
		this.name = name;
	}
	
	public static UserDetailsImp build(Integer id,String email,String password,Collection<? extends GrantedAuthority> authorities,String name) {
		
		return new UserDetailsImp(id,email,password,authorities,name);
	}
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

	public Integer getId() {
		return this.id;
	}

	public String getEmail() {
		return this.email;
	}

	public String getName() {
		return name;
	}

	

}
