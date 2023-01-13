package com.dezsobinder.yumfeeder.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/feeder")
public class FeedController {
    @Value("${servo.pin}")
    private int PWM_PIN;

    @GetMapping("/feed")
    public String feedPet() throws InterruptedException {
//        Context context = Pi4J.newAutoContext();
//
//        ServoMotor servoMotor = new ServoMotor(context, PWM_PIN);
//        servoMotor.setPercent(40);
//        Thread.sleep(5000);
//        servoMotor.setPercent(23);
//        Thread.sleep(2000);
//        servoMotor.off();
//        context.shutdown();
        return "Motor has been moved successfully!";
    }
}
