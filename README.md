# Portfolio — Mikaelle Nascimento

Portfólio profissional de Mikaelle Nascimento, com foco em análise de dados, BI e prevenção à fraude. A experiência é apresentada de forma responsável, sem expor processos, projetos ou informações internas.

## Tecnologias

- React, TypeScript e Vite
- Tailwind CSS
- Zod para validação de conteúdo
- Vercel Analytics

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção e validar tipos, testes e conteúdo:

```bash
npm run build
```

## Estrutura principal

- `src/config/content.json`: experiências, competências e textos do portfólio
- `src/config/site.json`: metadados, navegação e links de contato
- `src/config/content.en.json` e `src/config/site.en.json`: versão em inglês
- `public/profile.jpg`: foto de perfil

## Publicação

O projeto está configurado para deploy na Vercel. Ao conectar o repositório GitHub, cada novo `git push` para a branch principal cria uma publicação atualizada automaticamente.
