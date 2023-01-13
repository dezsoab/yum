package com.dezsobinder.yumfeeder.motor;

import com.pi4j.context.Context;
import com.pi4j.io.pwm.Pwm;
import com.pi4j.io.pwm.PwmConfig;
import com.pi4j.io.pwm.PwmType;

public class ServoMotor {
    protected final static int DEFAULT_FREQUENCY = 50; // Hz
    protected final static float DEFAULT_MIN_DUTY_CYCLE = 2; // for SG92R
    protected final static float DEFAULT_MAX_DUTY_CYCLE = 13; // for SG92R
    private final Pwm pwm;
    private final float minDutyCycle;
    private final float maxDutyCycle;


    public ServoMotor(Context pi4j, int address) {
        this(pi4j, address, DEFAULT_MIN_DUTY_CYCLE, DEFAULT_MAX_DUTY_CYCLE);
    }

    public ServoMotor(Context pi4j, int address, float minDutyCycle,
                      float maxDutyCycle) {
        this(pi4j, address, DEFAULT_FREQUENCY, minDutyCycle, maxDutyCycle);
    }

    public ServoMotor(Context pi4j, int address, int frequency, float minDutyCycle,
                      float maxDutyCycle) {
        this.pwm = pi4j.create(buildPwmConfig(pi4j, address, frequency));
        this.minDutyCycle = minDutyCycle;
        this.maxDutyCycle = maxDutyCycle;
    }

    private static float mapRange(float input, float inputStart, float inputEnd, float outputStart, float outputEnd) {
        if (inputStart > inputEnd) {
            final float tmp = inputEnd;
            inputEnd = inputStart;
            inputStart = tmp;
        }

        if (outputStart > outputEnd) {
            final float tmp = outputEnd;
            outputEnd = outputStart;
            outputStart = tmp;
        }

        final float clampedInput = Math.min(inputEnd, Math.max(inputStart, input));
        return outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (clampedInput - inputStart);
    }

    public void setPercent(float percent) {
        moveOnRange(percent, 0, 100);
    }

    public void moveOnRange(float value, float minValue, float maxValue) {
        pwm.on(mapToDutyCycle(value, minValue, maxValue));
    }

    private float mapToDutyCycle(float input, float inputStart, float inputEnd) {
        return mapRange(input, inputStart, inputEnd, minDutyCycle, maxDutyCycle);
    }

    public void off() {
        this.pwm.off();
    }

    protected PwmConfig buildPwmConfig(Context pi4j, int address, int frequency) {
        return Pwm.newConfigBuilder(pi4j)
                .id("BCM" + address)
                .name("Servo Motor")
                .pwmType(PwmType.HARDWARE)
                .provider("pigpio-pwm")
                .address(address)
                .frequency(frequency)
                .initial(23)
                .shutdown(23)
                .build();
    }
}
