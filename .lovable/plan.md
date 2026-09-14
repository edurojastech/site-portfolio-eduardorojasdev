# Atualizar SEO da página inicial

## Alterações
- Trocar o título e a descrição da página inicial pelos textos fornecidos.
- Adicionar as palavras-chave fornecidas ao HTML estático da página inicial.
- Manter título, descrição e palavras-chave sincronizados durante a navegação e no HTML gerado para buscadores.
- Atualizar os testes de SEO para cobrir as novas palavras-chave e validar o resultado.

## Detalhes técnicos
- Centralizar os dados em `src/lib/seo.ts`.
- Propagar `keywords` pelo componente de SEO e pelo processo de pré-renderização.
- Atualizar o bloco inicial de SEO em `index.html` para o ambiente de desenvolvimento.
