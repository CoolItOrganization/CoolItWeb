package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.SignUpRequest;
import com.example.demo.dto.response.LoggedIn;
import com.example.demo.dto.response.MessageResponse;
import com.example.demo.model.Admin;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.Service.UserDetailsImp;
import com.example.demo.util.JwtTokenUtil;


@CrossOrigin(origins="*",maxAge=3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
    private PasswordEncoder bcryptPasswordEncoder;
	
	@GetMapping("/")
	public Object Hello() {
		return SecurityContextHolder.getContext().getAuthentication();
//		return user.getEmail() + " " + user.getUsername() +" "+user.getAuthorities();
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		Authentication authentication = null;
		
		try {
			authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword()));
		}catch(BadCredentialsException e){
			throw e;
		}
			
	SecurityContextHolder.getContext().setAuthentication(authentication);
		UserDetailsImp userDetailsImp = (UserDetailsImp) authentication.getPrincipal();
		
       final String jwt = jwtTokenUtil.generateToken(userDetailsImp.getEmail());
       String role = userDetailsImp.getAuthorities().toString();
//		
		return ResponseEntity.ok(new LoggedIn(userDetailsImp.getId(),userDetailsImp.getEmail(),role,userDetailsImp.getName(),jwt));
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest){
		if(userRepository.existsByEmail(signUpRequest.getEmail()) || adminRepository.existsByEmail(signUpRequest.getEmail()) ) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already taken!"));
		}
		
		User user = new User(signUpRequest.getName(),signUpRequest.getEmail(),signUpRequest.getNumber(),bcryptPasswordEncoder.encode(signUpRequest.getPassword()));
		userRepository.save(user);
//		Admin admin = new Admin("nuvin@gmail.com",bcryptPasswordEncoder.encode("nuvin"),"nuvin");
//		adminRepository.save(admin);
		return ResponseEntity.ok(new MessageResponse("User Registerd succesfully!"));
	}
	
	
}
