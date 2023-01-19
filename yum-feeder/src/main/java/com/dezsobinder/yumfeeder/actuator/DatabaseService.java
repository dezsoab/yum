package com.dezsobinder.yumfeeder.actuator;

import com.dezsobinder.yumfeeder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class DatabaseService implements HealthIndicator {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Health health() {
        String DB_SERVICE = "service";

        if (isDatabaseRunning()) {
            return Health.up().withDetail(DB_SERVICE, "Service is running").build();
        }
        return Health.down().withDetail(DB_SERVICE, "Service is not available").build();
    }

    private boolean isDatabaseRunning() {
        return userRepository.findByUsername("admin").isPresent();
    }
}
