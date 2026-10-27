// ================================
//   CONTATO E REDES
// ================================
export const contactInfo = {
  email: 'KetlinOliveira20044@gmail.com',
  github: 'https://github.com/KetlinOlliveira',
  linkedin: 'https://www.linkedin.com/in/ketlin-oliveiradev',
  instagram: 'https://www.instagram.com/00h36m',
}

// ================================
//   NÚMEROS DO HERO
// ================================
export const heroStats = [
  { value: '200+', label: 'pull requests integrados em times reais' },
  { value: '2', label: 'sistemas públicos para a Prefeitura de Irecê' },
  { value: '3', label: 'agentes de IA orquestrados no PROVAI' },
]

// ================================
//   PILARES (SOBRE MIM)
// ================================
export const pillars = [
  {
    icon: 'server',
    title: 'Back-end',
    text: 'APIs em Java e Spring Boot com monolito modular, eventos de domínio, migrações versionadas com Flyway, RBAC e auditoria. Também Python com FastAPI.',
  },
  {
    icon: 'layout',
    title: 'Front-end',
    text: 'Interfaces em React e Next.js com TypeScript e Tailwind, pensadas para quem usa todo dia: acessibilidade, responsividade e feedback claro.',
  },
  {
    icon: 'sparkles',
    title: 'IA aplicada',
    text: 'RAG com embeddings e pgvector, agentes com revisão automática, saída estruturada validada e cuidado com dados sensíveis antes de chegar ao modelo.',
  },
]

// ================================
//   DADOS DOS PROJETOS
// ================================
// kind: contexto do projeto (aparece como etiqueta no card)
// github/demo: opcionais; private: true para código institucional fechado
export const projectsData = [
  {
    id: 'provai',
    name: 'PROVAI | Gerador de provas com IA',
    kind: 'IA · Projeto pessoal',
    featured: true,
    desc: 'Transforma o material de aula (PDF, Word ou texto) em uma prova pronta com gabarito comentado, usando RAG e um pipeline de três agentes LLM.',
    highlights: [
      'RAG com embeddings locais (fastembed/ONNX) e busca semântica em PostgreSQL + pgvector, na mesma transação dos documentos.',
      'Três agentes com papéis separados: planejador, gerador e revisor. Questões reprovadas voltam ao gerador com as críticas (reflection).',
      'Saída estrita por JSON Schema e validação Pydantic com retorno do erro ao modelo; orquestração própria, sem LangChain.',
      'Geração em segundo plano com progresso em tempo real via Server-Sent Events e exportação em PDF, DOCX e Markdown.',
      '110 testes automatizados (81 no back-end contra Postgres real, 29 no front-end) e CI no GitHub Actions.',
    ],
    stack: ['Python', 'FastAPI', 'pgvector', 'RAG', 'Groq', 'React 19', 'Docker'],
    thumb: '/assets/projetos/provai-1.webp',
    images: [
      '/assets/projetos/provai-1.webp',
      '/assets/projetos/provai-fluxo.svg',
      '/assets/projetos/provai-2.webp',
      '/assets/projetos/provai-3.webp',
      '/assets/projetos/provai-4.webp',
    ],
    github: 'https://github.com/KetlinOlliveira/ia-gerador-provas',
  },
  {
    id: 'observatorio',
    name: 'Observatório da Mulher',
    kind: 'Liderança técnica · Prefeitura de Irecê',
    desc: 'Sistema de gestão e transparência da rede de proteção à mulher de Irecê. Atuo como líder técnica e QA: arquitetei o projeto e conduzo requisitos, revisão de código e qualidade.',
    highlights: [
      'Liderança técnica e QA: arquitetura do sistema, code review dos PRs do time, criação e priorização de issues e validação de qualidade antes de cada entrega.',
      'Levantamento de requisitos em visitas técnicas aos clientes, Documento de Especificação de Requisitos (ERS), diagrama de classes e protótipos no Figma.',
      'Back-end em monolito modular (Spring Boot) com fronteiras verificadas em build por ArchUnit e comunicação entre módulos por eventos de domínio.',
      'Sessão migrada de JWT no corpo para cookie HttpOnly, controle de acesso por perfil e trilha de auditoria que sobrevive a rollback, com exportação em PDF/DOCX.',
      'Relatórios do CRAM gerados com IA por uma porta com dois adaptadores (OpenRouter e Ollama local), sem enviar dados de menores ao modelo.',
      'Dashboard e indicadores públicos com filtros por período, território e tipo de violência; telas de acolhimento em wizard, perfil e linha do tempo.',
      'Decisões registradas em ADRs, migrações Flyway imutáveis e promoção dev → staging → produção.',
    ],
    stack: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'IA'],
    private: true,
  },
  {
    id: 'conecta',
    name: 'Conecta Município | Adoção de Animais',
    kind: 'Prefeitura de Irecê · Cidades Inteligentes IFBA',
    desc: 'Módulo completo de adoção de animais da plataforma de serviços municipais, do cadastro pelo servidor público até a solicitação do cidadão.',
    highlights: [
      'Responsável pelo módulo de ponta a ponta: back-end em Spring Boot e front-end em TypeScript.',
      'CRUD de animais com ficha veterinária, galeria de fotos, catálogo de vacinas e registro de vacinação.',
      'Catálogo público com filtros por espécie, porte, faixa etária, bairro e nome.',
      'Fluxo de solicitação de adoção com assinatura do termo de responsabilidade, envio de documento e geração do termo em PDF.',
    ],
    stack: ['Java', 'Spring Boot', 'TypeScript', 'React', 'PostgreSQL'],
    private: true,
  },
  {
    id: 'supermercado',
    name: 'Gestão de Supermercado | API',
    kind: 'Back-end · Projeto colaborativo',
    desc: 'API de gestão de supermercado com controle de acesso dinâmico. Implementei os módulos de estoque, compras e vendas.',
    highlights: [
      'Módulos de estoque (ajuste manual, histórico e alerta de reposição), compras com entrada no estoque e vendas com cancelamento.',
      'Movimentações concorrentes protegidas por lock otimista (409 em vez de sobrescrever).',
      'JWT com refresh token rotativo, RBAC lido do banco a cada requisição e senhas com BCrypt.',
      'Testes unitários e de integração por módulo e contrato OpenAPI documentado para o front-end.',
    ],
    stack: ['Java 21', 'Spring Boot 4', 'PostgreSQL', 'Flyway', 'JWT'],
    github: 'https://github.com/jeogam/gestao-supermercado',
  },
  {
    id: 'moresale',
    name: 'MoreSale | Dashboard e Web Service',
    kind: 'Full-stack · Projeto pessoal',
    desc: 'Plataforma de vendas com API REST em camadas e dashboard SPA. Evoluiu de estudo para um projeto com segurança, testes e ambiente containerizado.',
    highlights: [
      'Autenticação JWT com Spring Security e autorização por papel.',
      'Testes unitários e de integração com Testcontainers e cobertura medida com JaCoCo.',
      'Pacotes reorganizados por domínio e Postgres isolado via Docker Compose.',
      'Documentação da API com Swagger (OpenAPI 3).',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Testcontainers'],
    thumb: '/assets/projetos/projeto-service-1.webp',
    images: [
      '/assets/projetos/projeto-service-1.webp',
      '/assets/projetos/projeto-service-thumb1.webp',
      '/assets/projetos/projeto-service-thumb2.webp',
      '/assets/projetos/projeto-service-thumb3.webp',
    ],
    github: 'https://github.com/KetlinOlliveira/workshop-springboot-jpa',
  },
  {
    id: 'stardew',
    name: 'Stardew Valley | Guia do Centro Comunitário',
    kind: 'Full-stack · Projeto pessoal',
    desc: 'Guia interativo para completar o Centro Comunitário, com API própria em Spring Boot e interface temática em React.',
    highlights: [
      'API REST em Spring Boot com JPA/Hibernate e PostgreSQL hospedada no Render.',
      'Front-end em React, Tailwind e React Router com deploy contínuo na Vercel.',
      'Tratamento de cold start do servidor gratuito na interface.',
    ],
    stack: ['React', 'Tailwind', 'Java', 'Spring Boot', 'PostgreSQL'],
    thumb: '/assets/projetos/stardew-1.webp',
    images: [
      '/assets/projetos/stardew-1.webp',
      '/assets/projetos/stardew-2.webp',
      '/assets/projetos/stardew-3.webp',
    ],
    github: 'https://github.com/KetlinOlliveira/stardewvalley-checklist-frontend',
    demo: 'https://stardewvalley-guia.vercel.app',
  },
  {
    id: 'findpet',
    name: 'FindPet | Adoção Responsável',
    kind: 'Full-stack · Projeto acadêmico',
    desc: 'Plataforma de adoção responsável de pets: front-end em React e API REST em Spring Boot organizada por domínio.',
    highlights: [
      'Front-end refatorado de HTML/JS puro para React com componentização e React Router.',
      'API com DTOs que não expõem dados sensíveis e tratamento global de exceções padronizado.',
      'Identidade visual própria pensada para transmitir acolhimento e confiança.',
    ],
    stack: ['React', 'Vite', 'Java', 'Spring Boot', 'Bean Validation'],
    thumb: '/assets/projetos/findpet-1.webp',
    images: ['/assets/projetos/findpet-1.webp', '/assets/projetos/findpet-2.webp'],
    github: 'https://github.com/KetlinOlliveira/backend-findpet',
    demo: 'https://findpet.vercel.app',
  },
  {
    id: 'cidades',
    name: 'Cidades da Bahia | Dashboard',
    kind: 'Front-end · Projeto pessoal',
    desc: 'Dashboard de municípios da Bahia com dados da API do IBGE, tipagem forte e componentes reutilizáveis.',
    highlights: [
      'Consumo da API pública do IBGE com TypeScript de ponta a ponta.',
      'Componentes reutilizáveis e build com Vite.',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'IBGE API'],
    thumb: '/assets/projetos/projeto-api-3.webp',
    images: ['/assets/projetos/projeto-api-3.webp'],
    github: 'https://github.com/KetlinOlliveira/cidades-bahia-react-typescript-node',
  },
]

// ================================
//   DADOS DAS SKILLS
// ================================
// icon ausente = card mostra a sigla no lugar do ícone
export const skillCategories = [
  { id: 'all', label: 'Todas' },
  { id: 'backend', label: 'Back-end' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'ia', label: 'IA' },
  { id: 'dados', label: 'Dados & Mensageria' },
  { id: 'devops', label: 'DevOps & Qualidade' },
]

export const skillsData = [
  { icon: 'devicon-java-plain', label: 'Java', category: 'backend' },
  { icon: 'devicon-spring-original', label: 'Spring Boot', category: 'backend' },
  { icon: 'devicon-spring-original', label: 'Spring Security', category: 'backend' },
  { icon: 'devicon-hibernate-plain', label: 'JPA / Hibernate', category: 'backend' },
  { icon: 'devicon-python-plain', label: 'Python', category: 'backend' },
  { icon: 'devicon-fastapi-plain', label: 'FastAPI', category: 'backend' },
  { icon: 'devicon-nodejs-plain', label: 'Node.js', category: 'backend' },
  { icon: 'devicon-c-plain', label: 'C', category: 'backend' },

  { icon: 'devicon-typescript-plain', label: 'TypeScript', category: 'frontend' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript', category: 'frontend' },
  { icon: 'devicon-react-original', label: 'React', category: 'frontend' },
  { icon: 'devicon-nextjs-plain', label: 'Next.js', category: 'frontend' },
  { icon: 'devicon-tailwindcss-original', label: 'Tailwind CSS', category: 'frontend' },
  { icon: 'devicon-html5-plain', label: 'HTML5', category: 'frontend' },
  { icon: 'devicon-css3-plain', label: 'CSS3', category: 'frontend' },
  { icon: 'devicon-figma-plain', label: 'Figma', category: 'frontend' },

  { short: 'LLM', label: 'Integração com LLMs', category: 'ia' },
  { short: 'RAG', label: 'RAG', category: 'ia' },
  { short: 'AG', label: 'Agentes & Reflection', category: 'ia' },
  { short: 'EMB', label: 'Embeddings', category: 'ia' },
  { short: '{ }', label: 'Saída estruturada', category: 'ia' },
  { short: 'PE', label: 'Engenharia de Prompt', category: 'ia' },
  { short: 'OSS', label: 'Ollama / OpenRouter / Groq', category: 'ia' },
  { short: 'AI', label: 'Dev assistido por IA', category: 'ia' },

  { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', category: 'dados' },
  { short: 'VEC', label: 'pgvector', category: 'dados' },
  { short: 'FW', label: 'Flyway', category: 'dados' },
  { icon: 'devicon-mysql-plain', label: 'MySQL', category: 'dados' },
  { icon: 'devicon-mongodb-plain', label: 'MongoDB', category: 'dados' },
  { icon: 'devicon-supabase-plain', label: 'Supabase', category: 'dados' },
  { icon: 'devicon-apachekafka-original', label: 'Apache Kafka', category: 'dados', learning: true },
  { icon: 'devicon-rabbitmq-original', label: 'RabbitMQ', category: 'dados', learning: true },

  { icon: 'devicon-docker-plain', label: 'Docker', category: 'devops' },
  { icon: 'devicon-githubactions-plain', label: 'GitHub Actions', category: 'devops' },
  { icon: 'devicon-git-plain', label: 'Git', category: 'devops' },
  { icon: 'devicon-junit-plain', label: 'JUnit', category: 'devops' },
  { icon: 'devicon-pytest-plain', label: 'Pytest', category: 'devops' },
  { icon: 'devicon-swagger-plain', label: 'Swagger', category: 'devops' },
  { icon: 'devicon-postman-plain', label: 'Postman', category: 'devops' },
  { icon: 'devicon-vercel-original', label: 'Vercel / Render', category: 'devops' },
]

// ================================
//   DADOS DA TIMELINE (experiência e cursos)
// ================================
// O lado do card (esquerda/direita) é alternado automaticamente pela ordem.
// inProgress: destaca o card como "em andamento"
export const experienceData = [
  {
    id: 'observatorio',
    period: 'Jul 2026 — atual',
    title: 'Líder Técnica & QA — Observatório da Mulher',
    org: 'Cidades Inteligentes · IFBA Irecê · Prefeitura de Irecê',
    points: [
      'Arquitetei o projeto do zero: monolito modular com fronteiras verificadas por ArchUnit, eventos de domínio, migrações Flyway e decisões registradas em ADRs.',
      'Conduzo o time: code review dos PRs, criação e priorização de issues e validação de qualidade (QA) antes de cada entrega.',
      'Faço visitas técnicas aos clientes para levantar requisitos; redigi o Documento de Especificação de Requisitos (ERS), o diagrama de classes e os protótipos no Figma.',
      'Também desenvolvo: mais de 160 PRs entre back-end e front-end, incluindo autenticação com cookie HttpOnly, auditoria alinhada à LGPD e relatórios do CRAM gerados com IA com anonimização de dados sensíveis.',
    ],
    tags: ['Arquitetura', 'Code Review', 'QA', 'Requisitos', 'Figma', 'Spring Boot', 'Next.js', 'IA'],
  },
  {
    id: 'conecta',
    period: 'Ago 2026 — atual',
    title: 'Desenvolvedora Full-Stack — Conecta Município',
    org: 'Cidades Inteligentes · IFBA Irecê · Prefeitura de Irecê',
    points: [
      'Responsável pelo módulo de Adoção de Animais, back-end e front-end: cadastro, catálogo com filtros, vacinação, solicitação e termo de adoção em PDF.',
      'Propus e documentei decisões de domínio compartilhado em ADRs (endereço/NIS do cidadão e status de solicitação).',
      'Contribuição no e-Cidade, ERP público de gestão municipal em PHP.',
    ],
    tags: ['Spring Boot', 'TypeScript', 'React', 'PostgreSQL'],
  },
  {
    id: 'kafka',
    period: 'Em andamento',
    title: 'Apache Kafka & Mensageria com RabbitMQ',
    org: 'Curso livre',
    inProgress: true,
    points: [
      'Arquitetura orientada a eventos e comunicação assíncrona entre serviços.',
      'Kafka: tópicos, partições, consumer groups e garantias de entrega.',
      'RabbitMQ: exchanges, filas, roteamento, retries e dead-letter queues.',
    ],
  },
  {
    id: 'ads',
    period: '2024 — atual',
    title: 'Análise e Desenvolvimento de Sistemas — IFBA',
    org: 'Instituto Federal da Bahia · Campus Irecê',
    points: [
      'Foco em engenharia de software, modelagem de banco de dados e metodologias ágeis (Scrum).',
      'Desenvolvimento prático de APIs REST e interfaces web responsivas.',
    ],
  },
  {
    id: 'java-spring',
    period: '90 horas',
    title: 'Especialização Back-End: Java & Spring Boot',
    points: [
      'Java e Programação Orientada a Objetos (40h).',
      'Desenvolvimento de REST APIs com Spring Boot (50h).',
      'Arquitetura em camadas (MVC), documentação com Swagger (OpenAPI 3) e ORM com Hibernate/JPA.',
    ],
  },
  {
    id: 'front',
    period: '56 horas',
    title: 'Desenvolvimento Web: Front-End',
    points: [
      'HTML5, CSS3, JavaScript e React.',
      'Dashboards interativos e Single-Page Applications consumindo APIs externas.',
      'TypeScript para tipagem forte e código mais escalável.',
    ],
  },
  {
    id: 'outros',
    period: 'Cursos e Ferramentas Adicionais',
    title: 'IA, Versionamento e Processos',
    points: [
      'Inteligência Artificial Generativa & Dados pela Fundação Bradesco (52h).',
      'Controle de Versão com Git & GitHub (50h).',
      'Modelagem de Processos de Negócio (BPMN) com Bizagi (11h).',
      'Certificação oficial do Sistema Eletrônico de Informações (SEI! Usar).',
    ],
  },
]
