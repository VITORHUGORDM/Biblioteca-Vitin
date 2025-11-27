# Documento de Levantamento de Requisitos — Biblioteca

Versão: Final

Este documento refina e torna testáveis os requisitos do projeto, mantendo compatibilidade com a estrutura atual do repositório (`html/`, `css/`, `js/`, `images/`).

---

## 1. Introdução

### 1.1 Objetivo

Fornecer uma especificação clara, verificável e mensurável para o site de biblioteca, incluindo comportamento do usuário, critérios de aceitação, e requisitos não-funcionais quantificados.

### 1.2 Escopo

- Catálogo estático de livros renderizado no front-end.
- Busca, filtros, destaques e modal de detalhes.
- Inscrição em newsletter (simples, no front-end, com validação).
- Métricas básicas de interação (analytics simples, sem PII).

### 1.3 Fora do Escopo (MVP)

- Backend, banco de dados e autenticação real.
- Painel administrativo com UI; manutenção do catálogo é manual por arquivo.
- Integração real com provedores de e-mail/analytics de terceiros.

---

## 2. Atores e Perfis

- Visitante: navega, busca, filtra, abre detalhes, inscreve-se na newsletter.
- Administrador (técnico): mantém catálogo por edição de arquivo JS (até existir UI).
- Sistema (analytics local): registra eventos de interação de forma anônima.

---

## 3. Glossário e Dicionário de Dados

### 3.1 Estrutura do Livro

```javascript
{
   id: number,              // ID único (inteiro > 0)
   title: string,           // 1–150 chars
   author: string,          // 1–120 chars
   category: string,        // ex.: "Ficção", "Tecnologia", "Todos" (pseudo categoria)
   year: number,            // 1450–(ano atual)
   rating: number,          // inteiro 1–5
   image: string,           // caminho relativo em images/covers/
   description: string,     // 0–2000 chars, sem HTML perigoso
   isbn: string,            // ISBN-10/13 (somente dígitos e hífens)
   amazonLink: string,      // URL https; abrir em nova aba, noopener/noreferrer
   featured: boolean        // exibição em "Destaques"
}
```

Regras e validações:

- ISBN (simplificado): 10 ou 13 dígitos, podendo conter hífens: `^(?:\d{9}[\dXx]|\d{3}-?\d-?\d{2}-?\d{6}-?[\dXx]|\d{13}|\d{3}-?\d{10})$`
- URL externa: deve iniciar com `https://`.
- Imagem: arquivo existente em `images/covers/`.

---

## 4. Requisitos Funcionais (RF) — com Critérios de Aceitação

### RF01 — Listar livros

O sistema deve listar todos os livros com título, autor, categoria, ano, rating e capa.

- Critérios de aceitação:
  - Exibe: capa (com placeholder até carregar), título, autor, categoria, ano, rating.
  - Ordem padrão: Destaques primeiro; demais em ordem alfabética por título.
  - Se a imagem falhar, mostra fallback e mantém layout.
  - Estado vazio: mensagem “Nenhum livro disponível”.

### RF02 — Busca em tempo real

O sistema deve permitir busca por título, autor ou ISBN, combinável com filtro.

- Critérios de aceitação:
  - Case-insensitive, ignora acentos quando possível.
  - Atualiza resultados até 300ms após parada de digitação (debounce 250ms).
  - Entrada vazia restaura lista completa.
  - Termos são sanitizados antes de renderizar.
  - Funciona junto do filtro de categoria ativo.

### RF03 — Filtrar por categoria

O usuário pode filtrar por categoria; incluir opção “Todos”.

- Critérios de aceitação:
  - Categoria padrão: “Todos”.
  - Filtro combina com a busca (interseção).
  - Categoria sem resultados exibe mensagem de vazio.
  - Lista de categorias deriva dos dados (sem duplicatas).

### RF04 — Destaques

Exibir seção de livros com `featured: true`.

- Critérios de aceitação:
  - Destaques aparecem visualmente separados e primeiro na listagem.
  - Se não houver destaques, a seção não aparece ou mostra aviso discreto.

### RF05 — Modal de detalhes

Abrir modal com descrição, ISBN, avaliações e link de compra (Amazon).

- Critérios de aceitação:
  - Conteúdo: título, autor, capa grande (com placeholder), descrição, rating, ISBN e botão “Comprar na Amazon”.
  - Acessibilidade: `aria-labelledby`, `aria-modal`, foco inicial no título, trap de foco, `Esc` fecha.
  - Fechamento: botão “Fechar”, `Esc`, e clique no backdrop.
  - Ao fechar, o foco retorna ao elemento que abriu o modal.
  - Link externo: `target="_blank"` e `rel="noopener noreferrer"`.

### RF06 — Newsletter

Permitir inscrição com validação de e-mail e confirmação visual.

- Critérios de aceitação:
  - Validação sintática de e-mail (regex padrão) e sanitização.
  - Feedback de sucesso/erro acessível (role="status").
  - Prevenção de spam: debounce e campo honeypot oculto.
  - Sem persistência real no MVP; simula envio e confirma ao usuário.

### RF07 — Lazy loading de imagens

Carregar imagens apenas quando entrarem no viewport.

- Critérios de aceitação:
  - Imagens fora da viewport não iniciam download até estarem a <= 50px da borda visível.
  - Usa `IntersectionObserver` e fallback para `loading="lazy"` quando indisponível.
  - Remove observer após a carga e mantém placeholder até `load`.

### RF08 — Acessibilidade

Garantir navegação por teclado, ARIA e foco visível.

- Critérios de aceitação:
  - Todos elementos interativos atingíveis por Tab em ordem lógica.
  - Foco visível com contraste adequado.
  - Modal cumpre requisitos do RF05.
  - Leitores de tela anunciam rótulos e estados (aria-label/aria-live).

### RF09 — Analytics simples

Registrar eventos principais (abertura de modal, busca, inscrição).

- Critérios de aceitação:
  - Eventos: `openModal(bookId)`, `search(termLen)`, `subscribeNewsletter(domain)`.
  - Dados anônimos, sem PII; termo de busca enviado apenas como tamanho (não conteúdo).
  - Registro é resiliente a falhas (sem quebrar UI).

### RF10 — Manutenção do catálogo

Permitir manutenção do catálogo (adição/edição) via arquivo centralizado.

- Critérios de aceitação:
  - Fonte única de dados (array `books` em `js/biblioteca.js`).
  - Campos obrigatórios: `id`, `title`, `author`, `category`, `year`, `rating`, `image`.
  - Função de validação (dev) sinaliza entradas inválidas no console.
  - README documenta como adicionar/editar livros.

---

## 5. Requisitos Não Funcionais (RNF) — Quantificados

### RNF01 — Performance

- LCP ≤ 2.5s em dispositivo médio (4G ~1.5Mbps).
- CLS ≤ 0.1; INP ≤ 200ms.
- JS total (bloqueante) ≤ 120KB min+gzip; CSS ≤ 80KB gzip.
- Imagens otimizadas (WebP/JPEG), largura adequada; cache com `Cache-Control` (quando no deploy).

### RNF02 — Responsividade

- Breakpoints: ≤480px (mobile), 768–1023px (tablet), ≥1024px (desktop).
- Layout funcional em portrait/landscape; sem overflow horizontal.

### RNF03 — Segurança

- Sanitização de entradas (busca, newsletter, modal).
- Links externos com `rel="noopener noreferrer"`.
- Proibir HTML não confiável em descrições; escapar ao renderizar.

### RNF04 — Manutenibilidade

- Código modular, funções puras para busca/filtragem/renderização.
- Nomes e comentários padronizados; documentação no README.

### RNF05 — Compatibilidade

- Últimas 2 versões de Chrome, Firefox, Edge; Safari 15+; iOS 15+; Android 10+.

### RNF06 — Acessibilidade

- WCAG 2.1 AA: contraste, navegação por teclado, labels e aria apropriados.

### RNF07 — Escalabilidade

- Suportar 1.000 livros mantendo busca/filtragem em ≤ 200ms no cliente.

### RNF08 — Localização (i18n)

- Strings de UI centralizadas e preparadas para tradução; idioma padrão pt-BR.

### RNF09 — Testabilidade

- Funções puras com testes unitários propostos; cobertura desejada ≥ 60% para núcleo (busca/filtragem/render helpers).

### RNF10 — Privacidade

- Não coletar PII sem consentimento. Newsletter somente com opt-in explícito.
- Analytics anônimo, sem armazenamento persistente por padrão.

---

## 6. Casos de Uso (resumo)

- CU01 — Listar catálogo: usuário abre a página e vê os livros (RF01, RF07).
- CU02 — Buscar livros: usuário digita termo e vê resultados (RF02, RF08).
- CU03 — Filtrar por categoria: usuário escolhe categoria (RF03).
- CU04 — Ver detalhes: usuário abre modal de um livro (RF05, RF08).
- CU05 — Inscrever newsletter: usuário informa e-mail e recebe confirmação (RF06).
- CU06 — Ver destaques: usuário identifica livros destacados (RF04).
- CU07 — Lazy loading: imagens carregam sob demanda (RF07).
- CU08 — Analytics: eventos são registrados (RF09).
- CU09 — Manter catálogo (técnico): editor atualiza arquivo de dados (RF10).

---

## 7. Matriz de Rastreabilidade (trecho)

| RF   | Caso de Uso | Componente alvo (indicativo)        |
| ---- | ----------- | ----------------------------------- |
| RF01 | CU01        | `js/biblioteca.js` (renderBooks)    |
| RF02 | CU02        | `js/biblioteca.js` (filterBooks)    |
| RF03 | CU03        | `js/biblioteca.js` (applyCategory)  |
| RF04 | CU06        | `js/biblioteca.js` (getFeatured)    |
| RF05 | CU04        | `js/biblioteca.js` (openModal)      |
| RF06 | CU05        | `js/login.js` (newsletter)          |
| RF07 | CU07        | `js/biblioteca.js` (lazyLoadImages) |
| RF08 | CU02, CU04  | `js/biblioteca.js` (a11y helpers)   |
| RF09 | CU08        | `js/autenticacao.js` (analytics fn) |
| RF10 | CU09        | `js/biblioteca.js` (books store)    |

Nota: nomes de funções são indicativos e podem ser ajustados ao código atual.

---

## 8. Premissas e Restrições

- MVP sem backend; dados estáticos no front-end.
- Sem autenticação real; página `html/Login.html` é estática.
- Catálogo mantido manualmente até existir UI/Admin.

---

## 9. Riscos e Mitigações

- Crescimento do catálogo degrada busca → index simples (Map por título/autor) e debounce (mitigação).
- Imagens pesadas → otimização e lazy loading (mitigação).
- Acessibilidade negligenciada → checklist WCAG e testes com teclado/Leitor de Tela (mitigação).

---

## 10. Eventos de Analytics (propostos)

- `openModal`: { bookId: number }
- `search`: { termLen: number, category: string }
- `subscribeNewsletter`: { domain: string } // domínio extraído do e-mail
  Regras: sem PII, sem termos completos; falhas não impactam UX.

---

## 11. Privacidade e Segurança

- Consentimento explícito antes de enviar e-mail de newsletter.
- Sem compartilhamento de dados com terceiros no MVP.
- Sanitização e escape de todas as entradas antes de renderizar HTML.

---

## 12. Internacionalização (i18n)

Strings candidatas (pt-BR → chave sugerida):

- "Buscar livros" → `search.placeholder`
- "Todos" → `filter.all`
- "Destaques" → `section.featured`
- "Nenhum resultado encontrado" → `list.empty`
- "Fechar" → `modal.close`
- "Comprar na Amazon" → `cta.amazon`

---

## 13. Plano de Testes (proposto)

- Unidade: `filterBooks(books, term, category)`, `getFeaturedBooks(books)`, `validateEmail(email)`, `sanitizeInput(v)`.
- Integração: abrir/fechar modal; combinação busca+filtro; lazy loading troca `data-src` → `src`.
- Acessibilidade: navegação por Tab, foco visível, `Esc` fecha modal, `aria-*` presentes.

---

## 14. Backlog Priorizado (MoSCoW)

- Must: RF01, RF02, RF03, RF05, RF07, RNF01, RNF06.
- Should: RF04, RF06, RF09, RNF02, RNF03.
- Could: RNF08, documentação ampliada, UI Admin futura.
- Won’t (MVP): backend real, persistência de newsletter, auth.

---

## 15. Anexos

### A. Heurísticas de Nielsen (resumo da avaliação)

Todos os itens de usabilidade parcial foram implementados: spinners/placeholders, focus trap, mensagens de erro amigáveis e debounce. O site está alinhado com as heurísticas de Nielsen para esses pontos.

### B. Referência — Estrutura de Dados

Ver seção 3.1 deste documento.
