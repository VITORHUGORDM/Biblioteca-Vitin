## 📋 Levantamento de Requisitos

### Requisitos Funcionais (RF)

1. RF01 - Listar todos os livros disponíveis com título, autor, categoria, ano, rating e capa.
2. RF02 - Busca em tempo real por título, autor ou ISBN (suportar combinação com filtro).
3. RF03 - Filtrar livros por categoria (incluir "Todos").
4. RF04 - Exibir livros em destaque (featured).
5. RF05 - Abrir modal de detalhe com descrição, ISBN, avaliações e link de compra (Amazon).
6. RF06 - Inscrição em newsletter com validação de e-mail e confirmação.
7. RF07 - Lazy loading de imagens e placeholders enquanto carregam.
8. RF08 - Acessibilidade: navegação por teclado, ARIA labels, foco visível e ESC fecha modal.
9. RF09 - Analytics simples para eventos principais (abertura de modal, busca, inscrição).
10. RF10 - Permitir adicionar/editar livros via edição do array `books` em `js/script.js`.

### Requisitos Não-Funcionais (RNF)

1. RNF01 - Performance: página inicial deve carregar rapidamente; usar lazy loading e minimizar repaints.
2. RNF02 - Responsividade: suportar breakpoints mobile/tablet/desktop.
3. RNF03 - Segurança: links externos com rel="noopener noreferrer"; sanitizar entradas.
4. RNF04 - Manutenibilidade: estrutura de dados centralizada; código modular e comentado.
5. RNF05 - Compatibilidade: suportar Chrome, Firefox, Safari, Edge e browsers móveis modernos.
6. RNF06 - Acessibilidade: contraste adequado, leitores de tela e foco lógico.
7. RNF07 - Escalabilidade: fácil adição de filtros (ano, rating) e integração com APIs externas.
8. RNF08 - Localização: preparar strings para futura tradução (i18n).
9. RNF09 - Testabilidade: facilitar testes unitários para funções de busca/filtragem e render.
10. RNF10 - Privacidade: não persistir dados sensíveis sem consentimento (p.ex. newsletter).

---

## 🔍 Avaliação segundo as Heurísticas de Nielsen

Para cada heurística: Status (Atendido / Parcial / Não atendido) e recomendação curta.

1. Visibilidade do status do sistema

   - Status: Parcial
   - Recomendações: Mostrar spinner/placeholder em operações assíncronas (carregamento de imagens, envio de newsletter).

2. Compatibilidade entre sistema e o mundo real

   - Status: Atendido
   - Recomendações: Usar linguagem consistente com usuários (ex.: explicar "featured" como "Destaques").

3. Controle e liberdade do usuário

   - Status: Parcial
   - Recomendações: Adicionar confirmação/desfazer para ações críticas (inscrição newsletter); permitir fechar modal clicando fora do conteúdo.

4. Consistência e padrões

   - Status: Atendido
   - Recomendações: Padronizar nomes de funções e classes; documentar convenções no README.

5. Prevenção de erros

   - Status: Parcial
   - Recomendações: Validar e sanitizar entradas (busca, newsletter); tratar links quebrados com fallback.

6. Reconhecimento em vez de memorização

   - Status: Atendido
   - Recomendações: Mostrar rótulos claros e exemplos de busca (ex.: placeholder "Título, Autor ou ISBN").

7. Flexibilidade e eficiência de uso

   - Status: Parcial
   - Recomendações: Adicionar debounce na busca, atalhos de teclado para usuários avançados e filtros rápidos.

8. Estética e design minimalista

   - Status: Atendido
   - Recomendações: Manter layout limpo; reduzir elementos não essenciais em páginas de listagem.

9. Ajudar a reconhecer, diagnosticar e recuperar de erros

   - Status: Parcial
   - Recomendações: Mensagens de erro amigáveis (ex.: "Nenhum resultado encontrado") e instruções de recuperação.

10. Ajuda e documentação
    - Status: Parcial
    - Recomendações: Expandir README com guia de contribuição, padrão de dados e exemplos de testes; adicionar comentários nas funções críticas.

---

## ⚠️ Problemas Priorizados e Ações Recomendadas

1. Lazy loading incorreto (ex.: uso indevido de atributos) — Corrigir para atribuir `data-src` → `src` via IntersectionObserver e mostrar placeholder. (Prioridade: Alta)
2. Falta de debounce na busca — Implementar debounce para evitar renders excessivos. (Prioridade: Média)
3. Foco no modal / focus trap — Garantir que o foco fique dentro do modal enquanto aberto. (Prioridade: Média)
4. Feedback assíncrono insuficiente — Adicionar loaders e mensagens de sucesso/erro para ações de rede. (Prioridade: Baixa)
5. Testes automatizados ausentes — Criar testes unitários para funções de filtragem/Busca. (Prioridade: Baixa)

---

## ✅ Sugestões de Implementação Rápida (resumo)

- Implementar debounce (250ms) no input de busca.
- Ajustar IntersectionObserver para usar `img.dataset.src` e remover observer após carga.
- Adicionar spinner/placeholder no modal até a imagem carregar.
- Validar e sanitizar entrada do newsletter; mostrar opção de desfazer inscrição por 5s.
- Documentar no README como adicionar livros, categorias e como testar componentes JS.

---

Se quiser, aplico automaticamente as correções recomendadas (ex.: debounce + correção do lazy loading + focus trap no modal). Indique quais alterações devo aplicar primeiro.

## 💻 Compatibilidade

| Navegador       | Suporte     |
| --------------- | ----------- |
| Chrome          | ✅ Completo |
| Firefox         | ✅ Completo |
| Safari          | ✅ Completo |
| Edge            | ✅ Completo |
| Opera           | ✅ Completo |
| Mobile Browsers | ✅ Completo |

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Desktop** (1024px+) - Layout completo
- **Tablet** (768px - 1023px) - Layout adaptado
- **Mobile** (até 480px) - Layout otimizado

### Testes Recomendados

Use o DevTools do navegador (F12) para testar em diferentes tamanhos:

- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1920px)

## 🎓 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com:
  - Flexbox para layouts
  - CSS Grid para grids
  - Gradientes lineares
  - Animações e transições
  - Media queries responsivas
  - Variáveis CSS (Custom Properties)
- **JavaScript Vanilla** - Sem dependências externas:
  - DOM Manipulation
  - Event Listeners
  - Array Methods (filter, map, forEach)
  - LocalStorage (pronto para implementação)
  - Intersection Observer (lazy loading)

## 🔧 Recursos Avançados

### Lazy Loading

As imagens usam atributo `loading="lazy"` para melhor performance.

### Animações

- Fade-in ao carregar livros
- Slide-down na busca
- Slide-up no modal
- Hover effects nos cards
- Transições suaves

### Acessibilidade

- Labels semânticos
- ARIA labels
- Navegação por teclado (ESC para fechar modal)
- Suporte a leitores de tela
- Contraste adequado de cores

### Performance

- CSS minificado
- JavaScript otimizado
- Imagens otimizadas
- Sem dependências externas
- Carregamento rápido

## 📊 Estrutura de Dados

Cada livro contém:

```javascript
{
    id: number,              // ID único
    title: string,           // Título do livro
    author: string,          // Autor
    category: string,        // Categoria
    year: number,            // Ano de publicação
    rating: number,          // Avaliação (1-5)
    image: string,           // Caminho da imagem
    description: string,     // Descrição
    isbn: string,            // ISBN
   amazonLink: string,      // Link Amazon
    featured: boolean        // Mostrar em destaque?
}
```
