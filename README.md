# Portfólio — João Eduardo Brandenburg de Almeida

Site pessoal de um desenvolvedor em formação, no Espírito Santo, em busca de **estágio** em desenvolvimento web.

Este repositório contém apenas a versão em **React + Vite + Tailwind CSS**, na raiz, pronta para publicar na Vercel.

## Como rodar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (em geral `http://localhost:5173`).

Outros comandos:

```bash
npm run build    # gera a pasta dist/
npm run preview  # testa o build de produção localmente
```

## Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com) com a conta do GitHub.
2. Clique em **Add New… → Project** e importe `junaofnetwork/Meu-portofolio`.
3. Confirme o branch (depois do merge, use `main`). Framework: Vite. Comando de build: `npm run build`. Pasta de saída: `dist`.
4. Publique. Copie a URL gerada.
5. Opcional, mas recomendado: cole essa URL nas tags Open Graph de `index.html` (hoje a imagem usa caminho relativo `/og-image.png`) e no campo *Website* do repositório no GitHub.

Se preferir, instale a CLI (`npm i -g vercel`) na pasta do projeto e rode `vercel`.

## Conteúdo pendente (TODO)

Edite `src/data.js`:

- Cole links de demo dos projetos privados (Órbita, IClothes, NEXORA), se existirem.
- Publique a Barbearia Estilo Livre e cole a URL de demo.
- Depois do deploy, atualize as tags Open Graph com a URL definitiva.

O formulário de contato usa o Formspree já configurado no projeto anterior.

## Estrutura

```text
index.html          # meta, SEO e ponto de entrada do Vite
public/             # foto, currículo, favicon e imagem de compartilhamento
src/data.js         # textos, stack, projetos e links
src/components/     # seções da página
```
