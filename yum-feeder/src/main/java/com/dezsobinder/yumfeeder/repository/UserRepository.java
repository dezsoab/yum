package com.dezsobinder.yumfeeder.repository;

import com.dezsobinder.yumfeeder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
//    @Query("SELECT u FROM User u WHERE u.user_name=?1")
    Optional<User> findByUsername(String username);
}
