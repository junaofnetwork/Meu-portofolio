/**
 * Conteúdo do portfólio.
 *
 * Itens marcados com TODO ainda dependem de link ou demo do João.
 * Não invente dados aqui.
 */

export const profile = {
  name: 'João Eduardo Brandenburg de Almeida',
  shortName: 'João Eduardo',
  title: 'Desenvolvedor em formação',
  goal: 'Estágio em Desenvolvimento / Back-end Python',
  location: 'Vila Velha – ES',
  photo: '/perfil.jpg',
  photoAlt: 'Foto de João Eduardo Brandenburg de Almeida',
  intro:
    'Cursando Análise e Desenvolvimento de Sistemas na Multivix, técnico em Informática no Centro Estadual Vasco Coutinho e Full Stack Python na EBAC, com foco em back-end. Aberto a estágio.',
  education: [
    {
      label: 'Graduação',
      role: 'Análise e Desenvolvimento de Sistemas (ADS)',
      status: 'Em andamento',
      name: 'Multivix',
      url: 'https://www.multivix.edu.br/',
    },
    {
      label: 'Formação técnica',
      role: 'Técnico em Informática',
      status: 'Em andamento',
      name: 'Centro Estadual Vasco Coutinho',
      url: 'https://vascocoutinho.ceet.secti.es.gov.br/',
    },
    {
      label: 'Curso',
      role: 'Full Stack Python',
      status: 'Em andamento, com foco em Back-end Python',
      name: 'EBAC',
      url: 'https://ebaconline.com.br/',
    },
  ],
  links: {
    github: 'https://github.com/junaofnetwork',
    linkedin:
      'https://www.linkedin.com/in/jo%C3%A3o-eduardo-brandenburg-de-almeida-b51720320',
    instagram: 'https://www.instagram.com/joao_aleatorio_do_es/',
  },
  cvUrl: '/curriculo.pdf',
  email: 'joaobrandpera@gmail.com',
  whatsapp: 'https://wa.me/5527992771921',
  formspree: 'https://formspree.io/f/mnnzldrn',
}

export const aboutParagraphs = [
  'Sou o João Eduardo, de Vila Velha, no Espírito Santo. Estudo Análise e Desenvolvimento de Sistemas na Multivix, curso o técnico em Informática no Centro Estadual Vasco Coutinho e faço Full Stack Python na EBAC, com o estudo voltado para back-end em Python. Procuro um estágio em desenvolvimento para trabalhar com código no dia a dia.',
  'Antes da programação, trabalhei como digitalizador: organizava e tratava documentos, seguindo procedimento e cuidando da padronização. Os projetos abaixo são coisas que eu mesmo construí, do site institucional ao sistema com banco de dados. Alguns ainda estão em repositório privado; posso demonstrar numa conversa.',
]

export const stack = [
  {
    group: 'Linguagens e fundamentos',
    items: [
      'Python',
      'Lógica de programação',
      'Programação Orientada a Objetos',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Java',
      'HTML',
      'CSS',
    ],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'CSS Modules'],
  },
  {
    group: 'Backend e dados',
    items: ['Node.js', 'Express', 'SQL', 'MySQL', 'SQLite', 'Java Swing'],
  },
  {
    group: 'Ferramentas',
    items: ['Git', 'GitHub', 'Vite', 'Electron', 'Docker', 'Capacitor'],
  },
  {
    group: 'Informática',
    items: ['Windows', 'Suporte técnico', 'Hardware e manutenção', 'Desenvolvimento de sistemas'],
  },
]

export const projects = [
  {
    id: 'orbita',
    title: 'Órbita',
    privateRepo: true,
    problem:
      'Queria entender, na prática, como uma rede social funciona de ponta a ponta — conta, feed, privacidade e conversas — sem depender de um framework pronto ou de APIs pagas.',
    built:
      'Construí uma rede social completa em PHP 8 e MySQL: cadastro e login, publicações com imagens, curtidas, respostas, reposts, seguidores, contas privadas, bloqueios, busca, notificações e chat. Também cuidei de validação no servidor, senhas com hash, proteção CSRF e layout responsivo.',
    stack: ['PHP 8', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Apache'],
    repo: null,
    demo: null, // TODO: cole o link da demo, se houver uma URL pública.
  },
  {
    id: 'icloothes',
    title: 'IClothes',
    privateRepo: true,
    problem:
      'Montar um fluxo realista de marketplace local, no estilo de um app de delivery: o cliente pede, a loja acompanha e a operação fica registrada no banco.',
    built:
      'Desenvolvi o app do cliente, o painel do lojista e o painel administrativo, com API em Node.js/Express e MySQL. O pedido é salvo no banco, o lojista atualiza o status e o cliente acompanha o histórico. Há também solicitação de parceria de lojas, filtro por estado e cidade, e uma base para Android/iOS com Capacitor.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'Capacitor'],
    repo: null,
    demo: null, // TODO: cole o link da demo, se houver uma URL pública.
  },
  {
    id: 'nexora',
    title: 'NEXORA Games',
    privateRepo: true,
    problem:
      'Criar uma loja digital de jogos que pudesse rodar localmente, no navegador ou como aplicativo de desktop, com catálogo, contas e biblioteca — sem copiar marca de plataformas existentes.',
    built:
      'Implementei a plataforma em Node.js e Express, com SQLite, autenticação (senha com hash, sessão e JWT), catálogo com busca e filtros, carrinho, lista de desejos, biblioteca, avaliações e painel administrativo. Também há versão desktop com Electron e um checkout apenas demonstrativo, sem cobrança real.',
    stack: ['Node.js', 'Express', 'SQLite', 'JavaScript', 'Electron', 'Docker'],
    repo: null,
    demo: null, // TODO: cole o link da demo, se houver uma URL pública.
  },
  {
    id: 'docevila',
    title: 'DoceVila',
    privateRepo: false,
    problem:
      'Uma confeitaria precisa controlar login, produtos, clientes, fornecedores, encomendas e estoque num sistema de computador, com o banco separado da tela.',
    built:
      'Fiz um sistema desktop em Java Swing que fala com MySQL por uma camada DAO: login, dashboard e telas de cadastro e listagem (produtos, estoque, clientes, fornecedores, encomendas e usuários). O projeto também tem um guia didático explicando o fluxo e o CRUD.',
    stack: ['Java', 'Java Swing', 'MySQL', 'DAO'],
    repo: 'https://github.com/junaofnetwork/DoceVila_project',
    demo: null, // aplicativo desktop; não há demo web.
  },
  {
    id: 'portal-viagens',
    title: 'Portal Viagens',
    privateRepo: false,
    problem:
      'Exercitar um site em Next.js com várias rotas: uma home, uma listagem e páginas de detalhe geradas a partir dos dados de cada destino.',
    built:
      'Desenvolvi um portal de destinos turísticos com home, galeria de destinos e páginas internas com descrição, pontos de interesse e melhor época para visitar. O projeto está no ar e usa TypeScript e CSS Modules. O código fica no repositório todolist, na pasta portalviagens.',
    stack: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
    repo: 'https://github.com/junaofnetwork/todolist',
    demo: 'https://todolist-dun.vercel.app',
  },
  {
    id: 'barbearia',
    title: 'Barbearia Estilo Livre',
    privateRepo: false,
    problem:
      'Uma barbearia precisa de uma página simples na web para se apresentar e mostrar os serviços, sem um sistema complexo por trás.',
    built:
      'Criei um site institucional em HTML e Bootstrap, com banner, texto de apresentação, cards de serviços e área de depoimentos. É um projeto de frontend, focado em layout e estrutura da página.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    repo: 'https://github.com/junaofnetwork/Barbearia-Estilo-Livre',
    demo: null, // TODO: publique o site (GitHub Pages ou Vercel) e cole a URL aqui.
  },
  {
    id: 'petstyle',
    title: 'PetStyle',
    privateRepo: false,
    problem:
      'Começar uma loja virtual de produtos para pets, praticando JavaScript e uma interface em React.',
    built:
      'O repositório público reúne uma base em React, Vite e Tailwind e um exercício de JavaScript orientado a objetos. No estado atual o código ainda está em construção e mistura outras páginas de estudo; não é uma loja completa. Deixei o link do repositório para quem quiser ver o andamento.',
    stack: ['JavaScript', 'React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/junaofnetwork/petstyle-loja-virtual',
    demo: null,
  },
]
