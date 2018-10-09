package com.cbs.core_interfaceI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("com")
@EntityScan({"com.casa"})
@EnableJpaRepositories({
        "com.casa.repository"
})
@SpringBootApplication(scanBasePackages = {"com.casa.controller"})
public class CoreInterfaceIApplication extends SpringBootServletInitializer {

    protected SpringApplicationBuilder configure(SpringApplicationBuilder springApplicationBuilder) {
        return springApplicationBuilder.sources(CoreInterfaceIApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(CoreInterfaceIApplication.class, args);
    }
}
