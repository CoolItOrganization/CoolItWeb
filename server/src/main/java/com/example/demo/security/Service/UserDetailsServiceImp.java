package com.example.demo.security.Service;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public UserDetailsImp loadUserByUsername(String email) throws UsernameNotFoundException{
		
		Admin admin = adminRepository.findByEmail(email);
		User user = userRepository.findByEmail(email);
		
		if(admin!=null) {
				Collection<GrantedAuthority> grantedAuthority = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
				return UserDetailsImp.build(admin.getId(), admin.getEmail(), admin.getPassword(), grantedAuthority,admin.getName());
				
		}else {
			if(user!=null) {
					Collection<GrantedAuthority> grantedAuthority = Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
					return UserDetailsImp.build(user.getId(), user.getEmail(), user.getPassword(), grantedAuthority,user.getName());
			}else {
				throw new UsernameNotFoundException("Email is not found!");
			}
		}

	}

}
