package it.vscalcione.springboot.securitydemo.config;

import com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JWTokenHelper {

    @Value("${jwt.auth.app}")
    private String appName;

    @Value("${jwt.auth.secret_key}")
    private String secretKey;

    @Value("${jwt.auth.expires_in}")
    private int expiresIn;
}
