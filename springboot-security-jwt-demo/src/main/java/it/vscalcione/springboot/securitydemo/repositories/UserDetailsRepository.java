package it.vscalcione.springboot.securitydemo.repositories;

import it.vscalcione.springboot.securitydemo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
