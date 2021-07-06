package com.example.demo3;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public abstract class CORSConfig {
    @Bean
    public CORSConfig corsConfigurer() {
        return new CORSConfig() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

    public abstract void addCorsMappings(CorsRegistry registry);
}
