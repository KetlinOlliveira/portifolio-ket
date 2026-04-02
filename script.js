// Seleção dos elementos do DOM
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalActionClose = document.getElementById('modalActionClose'); // Novo botão
const projectCards = document.querySelectorAll('.project-card');

const modalMainImg = document.getElementById('modalMainImg');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');

// Banco de dados dos projetos (ATUALIZADO COM GALERIA)
const projectsData = [
    {
        id: 0,
        title: "MoreSale | DashBoard",
        description: "Projeto FullStack para gerenciamento de vendas. REST API em camadas com Spring Boot e frontend responsivo. Foco em CRUD, segurança e design clean.",
        // Array de imagens
        images: [
            "assets/projetos/projeto-service-1.png", // Imagem principal (hero)
            "assets/projetos/projeto-service-thumb1.png", // Foto do Swagger
            "assets/projetos/projeto-service-thumb2.png",
            "assets/projetos/projeto-service-thumb3.png"  
        ],
        github: "https://github.com/KetlinOlliveira/workshop-springboot-jpa"
    },
    {
        id: 1,
        title: "Wepet | Landing Page",
        description: "Landing page responsiva para petshop. Foco em UX e design limpo.",
        images: [
            "assets/projetos/projeto-wepet-2.png", // Foto do Gato (main)
            "assets/projetos/projeto-wepet-thumb1.png", // Foto da seção de serviços
            "assets/projetos/projeto-wepet-thumb2.png"  // Foto do rodapé
        ],
        github: "https://github.com/KetlinOlliveira/wepet-leandingpage-html-css"
    },
     {
        id: 2,
        title: " Cidades DashBoard | Municipios da Bahia",
        description: "Projeto frontend para visualização de dados de municípios baianos. Desenvolvido para fins acadêmicos, utilizando React e bibliotecas de visualização de dados.",
        images: [
            "assets/projetos/projeto-api-3.png" 
        ],
        github: "https://github.com/KetlinOlliveira/cidades-bahia-react-typescript-node"
    },
      {
        id: 3,
        title: " Contatos DashBoard | Agenda de Contatos",
        description: "Projeto para gerenciamento de contatos, permitindo criar, editar e excluir informações de contato. Desenvolvido para fins acadêmicos, utilizando React e bibliotecas de visualização de dados.",
           images:[ "assets/projetos/projeto-ctt-4.png" ,
                    "assets/projetos/projeto-ctt-thumb1.png" 
        ],
        github: "https://github.com/KetlinOlliveira/contacts-app"
    }
];

// Função para abrir o modal e carregar a galeria
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectsData.find(p => p.id === Number(projectId));

        if (project) {
            modalTitle.innerText = project.title;
            modalDesc.innerText = project.description;
            modalLink.href = project.github;
            modalMainImg.src = project.images[0];
            modalMainImg.classList.remove('img-fade'); // Garante que comece visível

            modalThumbnails.innerHTML = ''; 
            
            project.images.forEach((imgUrl, index) => {
                const thumbDiv = document.createElement('div');
                thumbDiv.classList.add('modal-thumb');
                if (index === 0) thumbDiv.classList.add('active');

                thumbDiv.innerHTML = `<img src="${imgUrl}" alt="Miniatura ${index + 1}">`;

                thumbDiv.addEventListener('click', () => {
                    modalMainImg.classList.add('img-fade');

                    setTimeout(() => {
                        modalMainImg.src = imgUrl;
                        modalMainImg.classList.remove('img-fade');
                    }, 200); 

                    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                    thumbDiv.classList.add('active');
                });

                modalThumbnails.appendChild(thumbDiv);
            });

            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}); 
// Função para fechar o modal
const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Libera o scroll
};

modalClose.addEventListener('click', closeModal);
modalActionClose.addEventListener('click', closeModal); // Novo botão de retornar

// Fechar ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// --- ANIMAÇÃO DE SCROLL (REVEAL) ---
// Seleciona todos os elementos que têm a classe .reveal
const reveals = document.querySelectorAll('.reveal');

// Configuração do Observer: dispara quando o item estiver 15% visível na tela
const revealOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // Se o elemento entrou na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Adiciona a classe que faz a animação
            observer.unobserve(entry.target); // Para de observar depois que apareceu a primeira vez
        }
    });
}, revealOptions);

// Inicia a observação para cada item
reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe active de todos os botões e adicionar no clicado
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.skill-card');

        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                // Adiciona um efeito de fade in
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
const formulario = document.getElementById('meuFormulario');
const btnEnviar = document.getElementById('btnEnviar');
const msgSucesso = document.getElementById('mensagem-sucesso');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Inicia animação de loading no botão
    const textoOriginal = btnEnviar.innerText;
    btnEnviar.innerText = "Enviando...";
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = "0.7";

    const dados = {
        nome: formulario.querySelector('input[name="nome"]').value,
        email: formulario.querySelector('input[name="email"]').value,
        mensagem: formulario.querySelector('textarea[name="mensagem"]').value
    };

    try {
        //Apontando para o Back-end Java
        const response = await fetch('http://localhost:8081/api/contato', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            // Mostra mensagem de sucesso
            msgSucesso.classList.add('show');
            formulario.reset();
            
            // Esconde a mensagem após 5 segundos
            setTimeout(() => msgSucesso.classList.remove('show'), 5000);
        } else {
            alert('O servidor respondeu com erro. Verifique o console do Java.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível conectar ao seu back-end. Ele está rodando?');
    } finally {
        // Restaura o botão
        btnEnviar.innerText = textoOriginal;
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = "1";
    }
});
});

//troca de tema
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

// Função para atualizar o ícone baseado no tema
function updateIcon() {
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun'); // Se for claro, mostra sol
    } else {
        icon.classList.replace('fa-sun', 'fa-moon'); // Se for escuro, mostra lua
    }
}

// Ao carregar a página, verifica o tema salvo no localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    updateIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Salva a preferência
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    
    updateIcon(); // Muda o ícone na hora do clique
});
