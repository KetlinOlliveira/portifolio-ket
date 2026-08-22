// ================================
//   DADOS DOS PROJETOS
// ================================
export const projectsData = [
  {
    id: 0,
    name: 'MoreSale | DashBoard e WebService',
    desc: 'Projeto FullStack para gerenciamento de vendas. REST API em camadas com Spring Boot e frontend responsivo.',
    stack: ['Java', 'Springboot', 'PostgreSQL'],
    thumb: '/assets/projetos/projeto-service-1.png',
    images: [
      '/assets/projetos/projeto-service-1.png',
      '/assets/projetos/projeto-service-thumb1.png',
      '/assets/projetos/projeto-service-thumb2.png',
      '/assets/projetos/projeto-service-thumb3.png',
    ],
    github: 'https://github.com/KetlinOlliveira/workshop-springboot-jpa',
  },
  {
    id: 1,
    name: 'Wepet | Landing Page',
    desc: 'Landing page para a empresa Wepet, com foco em divulgar seus serviços.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    thumb: '/assets/projetos/projeto-wepet-2.png',
    images: [
      '/assets/projetos/projeto-wepet-2.png',
      '/assets/projetos/projeto-wepet-thumb1.png',
      '/assets/projetos/projeto-wepet-thumb2.png',
    ],
    github: 'https://github.com/KetlinOlliveira/wepet-leandingpage-html-css',
  },
  {
    id: 2,
    name: 'Cidades DashBoard',
    desc: 'Dashboard para visualização de dados de municípios da Bahia.',
    stack: ['TypeScript', 'React', 'IBGE API'],
    thumb: '/assets/projetos/projeto-api-3.png',
    images: ['/assets/projetos/projeto-api-3.png'],
    github: 'https://github.com/KetlinOlliveira/cidades-bahia-react-typescript-node',
  },
  {
    id: 3,
    name: 'Contatos | Agenda',
    desc: 'Sistema de gerenciamento de contatos com funcionalidades de CRUD.',
    stack: ['TypeScript', 'Node.js', 'MongoDB'],
    thumb: '/assets/projetos/projeto-ctt-4.png',
    images: [
      '/assets/projetos/projeto-ctt-4.png',
      '/assets/projetos/projeto-ctt-thumb1.png',
    ],
    github: 'https://github.com/KetlinOlliveira/contacts-app',
  },
  {
    id: 4,
    name: 'Stardew Valley | Guia do Centro Comunitário',
    desc: 'Guia interativo full stack para jogadores de Stardew Valley, com consulta em tempo real dos conjuntos (bundles) e itens do Centro Comunitário, consumindo uma API própria em Java e Spring Boot.',
    stack: ['Java', 'Springboot', 'PostgreSQL', 'React', 'Tailwind CSS'],
    thumb: '/assets/projetos/stardewvalley/stardew-1.png',
    images: [
      '/assets/projetos/stardewvalley/stardew-1.png',
      '/assets/projetos/stardewvalley/stardew-2.png',
      '/assets/projetos/stardewvalley/stardew-3.png',
      '/assets/projetos/stardewvalley/stardew-4.png',
    ],
    github: 'https://github.com/KetlinOlliveira/stardewvalley-checklist-frontend',
    demo: 'https://stardewvalley-guia.vercel.app',
  },
  {
    id: 5,
    name: 'FindPet | Plataforma de Adoção de Animais',
    desc: 'Plataforma para conectar pessoas a animais que precisam de um lar, promovendo uma adoção mais segura e responsável. API REST em Java e Spring Boot, organizada por domínio (controller, service, repository e DTO) com tratamento global de exceções.',
    stack: ['Java', 'Springboot', 'Spring Data JPA', 'H2 Database'],
    thumb: '/assets/projetos/findpet/findpet-1.png',
    images: [
      '/assets/projetos/findpet/findpet-1.png',
      '/assets/projetos/findpet/findpet-2.png',
    ],
    github: 'https://github.com/KetlinOlliveira/backend-findpet',
  },
]

// ================================
//   DADOS DAS SKILLS
// ================================
export const skillsData = [
  { icon: 'devicon-java-plain', label: 'Java', category: 'backend' },
  { icon: 'devicon-spring-original', label: 'Spring Boot', category: 'backend' },
  { icon: 'devicon-spring-original', label: 'Spring Security', category: 'backend' },
  { icon: 'devicon-c-plain', label: 'C', category: 'backend' },
  { icon: 'devicon-apachekafka-original', label: 'Apache Kafka', category: 'backend' },
  { icon: 'devicon-rabbitmq-original', label: 'RabbitMQ', category: 'backend' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript', category: 'frontend' },
  { icon: 'devicon-typescript-plain', label: 'TypeScript', category: 'frontend' },
  { icon: 'devicon-html5-plain', label: 'HTML5', category: 'frontend' },
  { icon: 'devicon-css3-plain', label: 'CSS3', category: 'frontend' },
  { icon: 'devicon-react-original', label: 'React', category: 'frontend' },
  { icon: 'devicon-tailwindcss-plain', label: 'Tailwind CSS', category: 'frontend' },
  { icon: 'devicon-nodejs-plain', label: 'Node.js', category: 'backend' },
  { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', category: 'database' },
  { icon: 'devicon-mysql-plain', label: 'MySQL', category: 'database' },
  { icon: 'devicon-mongodb-plain', label: 'MongoDB', category: 'database' },
  { icon: 'devicon-supabase-plain', label: 'Supabase', category: 'database' },
  { icon: 'devicon-redis-plain', label: 'Redis', category: 'database' },
  { icon: 'devicon-git-plain', label: 'Git', category: 'tools' },
  { icon: 'devicon-github-plain', label: 'GitHub', category: 'tools' },
  { icon: 'devicon-githubactions-plain', label: 'GitHub Actions (CI/CD)', category: 'tools' },
  { icon: 'devicon-docker-plain', label: 'Docker', category: 'tools' },
  { icon: 'devicon-figma-plain', label: 'Figma', category: 'tools' },
  { icon: 'devicon-intellij-plain', label: 'IntelliJ IDEA', category: 'tools' },
  { icon: 'devicon-swagger-plain', label: 'Swagger', category: 'tools' },
  { icon: 'devicon-junit-plain', label: 'JUnit 5', category: 'tools' },
]

// ================================
//   DADOS DA TIMELINE
// ================================
export const experienceData = [
  {
    id: 0,
    side: 'left',
    period: 'Fev 2024 — Dez 2027',
    title: 'Análise e Desenvolvimento de Sistemas — IFBA',
    points: [
      'Graduação tecnológica no Instituto Federal da Bahia (IFBA) em Irecê.',
      'Foco em engenharia de software, modelagem de banco de dados e metodologias ágeis (Scrum).',
      'Desenvolvimento prático de APIs REST escaláveis e interfaces web responsivas.',
    ],
  },
  {
    id: 1,
    side: 'right',
    period: '90 horas',
    title: 'Especialização Back-End: Java & Spring Boot',
    points: [
      'Java e Programação Orientada a Objetos (40h).',
      'Desenvolvimento de REST APIs com Spring Boot (50h).',
      'Implementação de arquitetura em camadas (MVC), documentação com Swagger (OpenAPI 3) e ORM com Hibernate/JPA.',
    ],
  },
  {
    id: 2,
    side: 'left',
    period: '56 horas',
    title: 'Desenvolvimento Web: Front-End',
    points: [
      'Curso completo de Web Dev englobando HTML5, CSS3, JavaScript e React.',
      'Criação de dashboards interativos e Single-Page Applications consumindo APIs externas.',
      'Uso de TypeScript para tipagem forte, reduzindo erros e aumentando a escalabilidade do código.',
    ],
  },
  {
    id: 3,
    side: 'right',
    period: 'Cursos e Ferramentas Adicionais',
    title: 'Versionamento, IA e Processos',
    points: [
      'Controle de Versão com Git & GitHub (50h) para fluxos de trabalho organizados.',
      'Inteligência Artificial Generativa & Dados pela Fundação Bradesco (52h).',
      'Modelagem de Processos de Negócio (BPMN) utilizando Bizagi (11h).',
      'Certificação oficial de uso do Sistema Eletrônico de Informações (SEI! Usar).',
    ],
  },
  {
    id: 4,
    side: 'left',
    period: '2026 — Presente',
    title: 'Desenvolvedora de Software — Cidades Inteligentes Municípios',
    points: [
      'Atuo no desenvolvimento do módulo de adoção de animais do e-Cidade, solução voltada a facilitar o acesso da população de Irecê (BA) aos serviços da prefeitura e das secretarias.',
      'Participo do ciclo completo de desenvolvimento, da modelagem à implementação de APIs REST em Java e Spring Boot integradas ao frontend.',
      'Projeto em desenvolvimento ativo, com foco em usabilidade e escalabilidade para o cidadão.',
    ],
  },
  {
    id: 5,
    side: 'right',
    period: 'Mai 2026 — Presente',
    title: 'Líder Técnica — Observatório da Mulher',
    points: [
      'Lidero uma equipe de 3 desenvolvedores na criação de uma plataforma de apoio à rede municipal de proteção, integrando cerca de 5 instituições e centralizando os dados de atendimento.',
      'Substitui o fluxo histórico baseado em papel por um sistema digital em PostgreSQL, otimizando a busca de dados e o desempenho das técnicas de acolhimento.',
      'Planejei a arquitetura em Monolito Modular com Java e Spring Boot, isolando os domínios de cada instituição para evolução independente, com autenticação via Spring Security e JWT.',
      'Estabeleci o fluxo de engenharia da equipe com GitFlow, pull requests, code review e testes unitários (JUnit 5 e Mockito).',
    ],
  },
]
