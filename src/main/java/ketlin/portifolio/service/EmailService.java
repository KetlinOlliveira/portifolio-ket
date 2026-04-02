package ketlin.portifolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ketlin.portifolio.dto.ContatoDTO;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarEmail(ContatoDTO dados) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("seu-portfolio@exemplo.com");
        message.setTo("KetlinOliveira20044@gmail.com"); // Seu e-mail de destino 
        message.setSubject("Novo contacto de: " + dados.nome());
        message.setText("Mensagem: " + dados.mensagem() + "\n\nResponder para: " + dados.email());

        mailSender.send(message);
    }
}