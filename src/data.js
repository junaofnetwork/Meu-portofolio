/**
 * Conteúdo do portfólio.
 *
 * Itens marcados com TODO precisam de confirmação ou arquivo do João
 * (texto, links, foto, currículo, demos). Não invente dados aqui.
 */

export const profile = {
  name: 'João Eduardo Brandenburg de Almeida',
  shortName: 'João Eduardo',
  title: 'Desenvolvedor em formação',
  goal: 'Buscando estágio em desenvolvimento web',
  location: 'Espírito Santo, Brasil',
  photo: '/perfil.jpg',
  photoAlt: 'Foto de João Eduardo Brandenburg de Almeida',
  // TODO: substitua perfil.jpg em public/ se quiser uma foto mais recente ou profissional.
  // TODO: confirme se ainda está cursando o técnico ou se já concluiu.
  school: {
    name: 'Ceet Vasco Coutinho',
    role: 'Cursando o técnico em Informática',
    url: 'https://vascocoutinho.ceet.secti.es.gov.br/',
  },
  // TODO: se quiser, troque o nome exato do curso da EBAC (ex.: Full Stack Python).
  course: {
    name: 'EBAC',
    role: 'Estudando desenvolvimento web',
    url: 'https://ebaconline.com.br/',
  },
  links: {
    github: 'https://github.com/junaofnetwork',
    linkedin:
      'https://www.linkedin.com/in/jo%C3%A3o-eduardo-brandenburg-de-almeida-b51720320',
    instagram: 'https://www.instagram.com/joao_aleatorio_do_es/',
  },
  // TODO: coloque o PDF em public/curriculo.pdf e altere para '/curriculo.pdf'.
  cvUrl: null,
  // TODO: e-mail ou WhatsApp profissional, se quiser exibir além do formulário.
  email: null,
  whatsapp: null,
  formspree: 'https://formspree.io/f/mnnzldrn',
}

export const aboutParagraphs = [
  'Sou o João Eduardo, do Espírito Santo. Cursando o técnico em Informática no Ceet Vasco Coutinho e estudando desenvolvimento web na EBAC. Estou buscando um estágio para trabalhar com código no dia a dia — frontend e backend.',
  'Os projetos abaixo são coisas que eu mesmo construí, do site institucional ao sistema com banco de dados. Alguns ainda estão em repositório privado; posso demonstrar numa conversa.',
]

export const stack = [
  {
    group: 'Linguagens',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'HTML', 'CSS'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'CSS Modules'],
  },
  {
    group: 'Backend e dados',
    items: ['Node.js', 'Express', 'MySQL', 'SQLite', 'Java Swing'],
  },
  {
    group: 'Ferramentas',
    items: ['Git', 'Vite', 'Electron', 'Docker', 'Capacitor'],
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
