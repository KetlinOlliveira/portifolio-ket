# 🌐 Portfólio Pessoal — Ketlin Oliveira

Portfólio pessoal desenvolvido para apresentar projetos, habilidades e informações de contato. Conta com frontend estático e um backend em Java/Spring Boot para envio de emails via formulário de contato.

🔗 **Acesse o projeto ao vivo:** [melodious-muffin-6d8e71.netlify.app](https://melodious-muffin-6d8e71.netlify.app)

---

## 🚀 Tecnologias Utilizadas

**Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla)

**Backend**
- Java 17
- Spring Boot 3.2.4
- Spring Mail
- SendGrid API

**Deploy**
- Frontend: [Netlify](https://netlify.com)
- Backend: [Railway](https://railway.app)

---

## ✨ Funcionalidades

- Apresentação de projetos com galeria de imagens e modal interativo
- Filtro de habilidades por categoria
- Formulário de contato com envio de email real
- Animações de scroll (Intersection Observer)
- Alternância entre tema claro e escuro
- Layout responsivo

---

## 📁 Estrutura do Projeto

```
portifolio-ket/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── src/
│   └── main/
│       ├── java/ketlin/portifolio/
│       │   ├── controller/
│       │   │   └── ContatoController.java
│       │   ├── dto/
│       │   │   └── ContatoDTO.java
│       │   ├── service/
│       │   │   └── EmailService.java
│       │   ├── CorsConfig.java
│       │   └── PortifolioApplication.java
│       └── resources/
│           └── application.properties
└── pom.xml
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Java 17+
- Maven

### Backend

1. Clone o repositório:
```bash
git clone https://github.com/KetlinOlliveira/portifolio-ket.git
cd portifolio-ket
```

2. Configure as variáveis de ambiente:
```bash
export SENDGRID_API_KEY=sua_chave_aqui
```

3. Rode o projeto:
```bash
mvn spring-boot:run
```

O backend estará disponível em `http://localhost:8080`

### Frontend

Basta abrir o arquivo `frontend/index.html` no navegador ou usar o Live Server do VS Code.

---

## 🌍 Deploy

| Serviço | URL |
|--------|-----|
| Frontend (Netlify) | [melodious-muffin-6d8e71.netlify.app](https://melodious-muffin-6d8e71.netlify.app) |
| Backend (Railway) | [portifolio-ket-production.up.railway.app](https://portifolio-ket-production.up.railway.app) |

---

## 📬 Contato

Desenvolvido por **Ketlin Oliveira**

- GitHub: [@KetlinOlliveira](https://github.com/KetlinOlliveira)
- Email: KetlinOliveira20044@gmail.com