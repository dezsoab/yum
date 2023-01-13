package com.dezsobinder.yumfeeder.auth;

import com.dezsobinder.yumfeeder.entity.Pet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {
    private String username;
    private String email;
    private String password;
    private List<Pet> pets;
}
