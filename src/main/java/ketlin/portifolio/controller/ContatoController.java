package ketlin.portifolio.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

import ketlin.portifolio.dto.ContatoDTO; 
import ketlin.portifolio.service.EmailService; // IMPORTANTE


@RestController
@RequestMapping("/api/contato")
@CrossOrigin(origins = "*")
public class ContatoController {

    @Autowired
    private EmailService emailService;

   @PostMapping
public ResponseEntity<Void> enviar(@RequestBody ContatoDTO dados) throws IOException {
    emailService.enviarEmail(dados);
    return ResponseEntity.ok().build();
}
}