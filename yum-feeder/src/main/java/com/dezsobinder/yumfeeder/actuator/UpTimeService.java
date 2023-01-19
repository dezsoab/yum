package com.dezsobinder.yumfeeder.actuator;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Endpoint(id = "uptime")
@Component
public class UpTimeService {
    private final LocalDateTime UP_TIME_START = LocalDateTime.now();

    @ReadOperation
    public Map<String, Long> getUpSince() {
        return calculateElapsedTime();
    }

    private Map<String, Long> calculateElapsedTime() {
        final LocalDateTime requestedTimeNow = LocalDateTime.now();
        final Duration between = Duration.between(UP_TIME_START, requestedTimeNow);

        long elapsedDays = between.toDaysPart();
        long elapsedHours = between.toHoursPart();
        long elapsedMinutes = between.toMinutesPart();
        long elapsedSeconds = between.toSecondsPart();

        Map<String, Long> mapTimes = new HashMap<>();
        mapTimes.put("Day", elapsedDays);
        mapTimes.put("Hour", elapsedHours);
        mapTimes.put("Minute", elapsedMinutes);
        mapTimes.put("Second", elapsedSeconds);

        return mapTimes;
    }
}
