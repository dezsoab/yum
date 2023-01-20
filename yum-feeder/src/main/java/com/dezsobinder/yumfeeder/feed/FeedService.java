package com.dezsobinder.yumfeeder.feed;

import com.dezsobinder.yumfeeder.motor.ServoMotor;
import com.pi4j.Pi4J;
import com.pi4j.context.Context;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FeedService {
    @Value("${servo.reset.time}")
    private int TIME_FOR_SERVO_RESET;
    @Value("${servo.pin}")
    private int PWM_PIN;
    @Value("${servo.state.start}")
    private int SERVO_START_VALUE;
    @Value("${servo.state.stop}")
    private int SERVO_STOP_VALUE;
    @Value("${portion.default.size}")
    private int DEFAULT_PORTION_SIZE;

    public FeedResponse feed(Double requestedPortion) throws InterruptedException {
        double portionToFeed = DEFAULT_PORTION_SIZE * requestedPortion; // eg.: 1000ms * 2.2s = 2200ms

        Context context = Pi4J.newAutoContext();
        ServoMotor servoMotor = new ServoMotor(context, PWM_PIN);
        servoMotor.setPercent(SERVO_START_VALUE);
        Thread.sleep((long) portionToFeed);
        servoMotor.setPercent(SERVO_STOP_VALUE);
        Thread.sleep(TIME_FOR_SERVO_RESET);
        servoMotor.off();
        context.shutdown();

        return FeedResponse.builder()
                .message("Pet has been fed")
                .build();
    }
}
