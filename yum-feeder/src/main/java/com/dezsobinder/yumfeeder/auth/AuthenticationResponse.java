package com.dezsobinder.yumfeeder.auth;

import com.dezsobinder.yumfeeder.entity.Pet;
import com.dezsobinder.yumfeeder.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String name;
    private Role role;
    private List<Pet> pets;
}
