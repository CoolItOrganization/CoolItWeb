package com.example.demo.security;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@Service
public class CustomAuthenticationProvider implements AuthenticationProvider{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;

	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String email = authentication.getName();
		String password = authentication.getCredentials().toString();
		
		UsernamePasswordAuthenticationToken authenticationToken = null;
		Admin admin = adminRepository.findByEmail(email);
		User user = userRepository.findByEmail(email);
		
		if(admin!=null) {
			if(email.equals(admin.getEmail()) && password.equals(admin.getPassword())) {
				Collection<GrantedAuthority> grantedAuthority = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
				authenticationToken = new UsernamePasswordAuthenticationToken(new org.springframework.security.core.userdetails.User(email,password,grantedAuthority),password, grantedAuthority);
			}else {
				throw new BadCredentialsException("Wrong Password!");
			}
		}else {
			if(user!=null) {
//				BCrypt.checkpw(Password,user.getPassword())
				if(email.equals(user.getEmail()) && password.equals(user.getPassword()))  {
					Collection<GrantedAuthority> grantedAuthority = Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
					authenticationToken = new UsernamePasswordAuthenticationToken(new org.springframework.security.core.userdetails.User(email,password,grantedAuthority),password, grantedAuthority);
				}else {
					throw new BadCredentialsException("Wrong Password!");
				}
			}else {
				throw new BadCredentialsException("Email is not found!");
			}
		}
		return authenticationToken;
		
		
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}
	
	
}
