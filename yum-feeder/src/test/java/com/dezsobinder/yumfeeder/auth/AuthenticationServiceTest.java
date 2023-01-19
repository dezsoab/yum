package com.dezsobinder.yumfeeder.auth;

import com.dezsobinder.yumfeeder.entity.Pet;
import com.dezsobinder.yumfeeder.entity.Role;
import com.dezsobinder.yumfeeder.entity.User;
import com.dezsobinder.yumfeeder.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class AuthenticationServiceTest {

    @MockBean
    private UserRepository userRepository;
    @MockBean
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthenticationService authenticationService;

    private User user;

    @BeforeEach
    void setUp() {
        Pet pet = Pet.builder()
                .name("Molli")
                .build();

        user = User
                .builder()
                .username("username")
                .email("email@email.com")
                .password("123")
                .pets(List.of(pet))
                .role(Role.USER)
                .build();
    }

    @Test
    @DisplayName("generate JWT token on register")
    void register() {
        var request = RegistrationRequest.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .pets(user.getPets())
                .build();

        Mockito.when(userRepository.save(user)).thenReturn(null);

        AuthenticationResponse response = authenticationService.register(request);
        assertEquals("username", response.getName());
        assertNotNull(response.getToken());
    }

    @Test
    @DisplayName("generate JWT token on authentication")
    void authenticate() {
        AuthenticationRequest request = AuthenticationRequest.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .build();

        Mockito.when(authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
        ))).thenReturn(null);
        Mockito.when(userRepository.findByUsername(request.getUsername())).thenReturn(Optional.of(user));

        AuthenticationResponse response = authenticationService.authenticate(request);
        assertEquals("username", response.getName());
        assertNotNull(response.getToken());
    }
}
