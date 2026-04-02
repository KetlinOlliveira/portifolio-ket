package ketlin.portifolio.service;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ketlin.portifolio.dto.ContatoDTO;
import java.io.IOException;

@Service
public class EmailService {

    @Value("${sendgrid.api.key}")
    private String sendGridApiKey;

    public void enviarEmail(ContatoDTO dados) throws IOException {
        Email from = new Email("KetlinOliveira20044@gmail.com");
        Email to = new Email("KetlinOliveira20044@gmail.com");
        String subject = "Novo contato de: " + dados.nome();
        Content content = new Content("text/plain", 
            "Mensagem: " + dados.mensagem() + "\n\nResponder para: " + dados.email());
        
        Mail mail = new Mail(from, subject, to, content);
        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();
        
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());
        sg.api(request);
    }
}