package com.dezsobinder.yumfeeder.repository;

import com.dezsobinder.yumfeeder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
