# Portfolio Ketlin — React + Vite

## Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```

O projeto abre em http://localhost:5173

---

## Estrutura de pastas

```
portfolio-react/
├── public/
│   └── assets/
│       ├── image/
│       │   └── eu.webp          ← sua foto aqui
│       └── projetos/
│           ├── projeto-service-1.png
│           ├── projeto-wepet-2.png
│           └── ...              ← todas as imagens dos projetos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx         ← modal incluído aqui
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx          ← integração com backend Java
│   │   └── Footer.jsx
│   ├── data/
│   │   └── data.js              ← edite aqui seus projetos, skills e cursos
│   ├── App.jsx                  ← controla o tema claro/escuro
│   ├── main.jsx
│   └── index.css                ← todo o CSS do projeto
├── index.html
├── vite.config.js               ← proxy do backend configurado
└── package.json
```

---

## Como copiar suas imagens

Mova a pasta `assets/` que você já tem para dentro de `public/`:

```
public/
  assets/
    image/
      eu.webp
    projetos/
      projeto-service-1.png
      projeto-wepet-2.png
      ...
```

---

## Backend Java — como funciona sem dar erro de CORS

### Em desenvolvimento (npm run dev)

O `vite.config.js` já tem um **proxy** configurado:

```js
server: {
  proxy: {
    '/api': {
      target: 'https://portifolio-ket-production.up.railway.app',
      changeOrigin: true,
      secure: true,
    }
  }
}
```

Isso faz com que toda chamada para `/api/contato` seja redirecionada
ao seu Railway **sem erro de CORS**, porque o Vite faz a chamada
de servidor para servidor.

### Em produção (após o deploy do React)

No painel do seu host (Vercel, Netlify, etc.), crie uma variável de ambiente:

```
VITE_API_URL = https://portifolio-ket-production.up.railway.app
```

O código em `Contact.jsx` já lê essa variável automaticamente.

Se não quiser criar a variável, a URL do Railway já está como fallback
no código — vai funcionar desde que seu backend no Railway
tenha CORS liberado para a origem do seu frontend.

### Como liberar CORS no Spring Boot (caso precise)

No seu projeto Java, adicione/verifique essa configuração:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins(
                "http://localhost:5173",        // dev
                "https://seu-site.vercel.app"   // produção — troque pela sua URL
            )
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*");
    }
}
```

---

## Como fazer o build para produção

```bash
npm run build
```

Gera a pasta `dist/` — é essa que você faz upload no Vercel/Netlify.

## Deploy no Vercel (mais fácil)

1. Suba o projeto no GitHub
2. Acesse vercel.com → New Project → importe o repositório
3. Adicione a variável `VITE_API_URL` nas configurações
4. Clique em Deploy — pronto!
