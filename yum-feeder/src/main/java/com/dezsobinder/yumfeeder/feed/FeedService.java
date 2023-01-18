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
    @Value("${servo.state.opened}")
    private int MAX_OPEN_VALUE;
    @Value("${servo.state.closed}")
    private int MAX_CLOSE_VALUE;
    @Value("${portion.default.size}")
    private int DEFAULT_PORTIONS_SIZE;

    public FeedResponse feed(int requestedPortion) throws InterruptedException {
        int portionToFeed = DEFAULT_PORTIONS_SIZE * requestedPortion;

        Context context = Pi4J.newAutoContext();
        ServoMotor servoMotor = new ServoMotor(context, PWM_PIN);
        servoMotor.setPercent(MAX_OPEN_VALUE);
        Thread.sleep(portionToFeed);
        servoMotor.setPercent(MAX_CLOSE_VALUE);
        Thread.sleep(TIME_FOR_SERVO_RESET);
        servoMotor.off();
        context.shutdown();

        return FeedResponse.builder()
                .message("Pet has been fed")
                .build();
    }
}
