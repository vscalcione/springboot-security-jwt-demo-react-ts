package it.vscalcione.springboot.securitydemo.services;

import it.vscalcione.springboot.securitydemo.models.User;
import it.vscalcione.springboot.securitydemo.repositories.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDetailsRepository.findByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException("User not found with username" + username);
        return user;
    }
}
