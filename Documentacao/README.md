# Biblioteca do Vitin — Especificação de Requisitos de Software (SRS)

**Versão:** Final

**Status:** Atualizado conforme código-fonte vigente

## 1. Introdução

### 1.1 Objetivo

O sistema "Biblioteca do Vitin" é uma aplicação web client-side (SPA simulada) destinada à
catalogação, busca e recomendação de livros. O objetivo é permitir que usuários descubram obras,
gerenciem uma lista de favoritos e acessem links de compra externos, além de fornecer ferramentas
administrativas para gestão de conteúdo.

### 1.2 Escopo Atual

- Front-end: HTML5, CSS3, JavaScript (ES6 Modules).
- Persistência: `localStorage` do navegador (simulando banco de dados).
- Funcionalidades: Catálogo, Busca Avançada, Autenticação (Login/Registro), Favoritos, Newsletter
  e Painel Administrativo.

## 2. Atores

- **Visitante:** Usuário não autenticado. Pode buscar livros, filtrar categorias e ver detalhes,
  mas não pode favoritar.
- **Usuário Registrado:** Usuário autenticado. Possui todas as permissões do Visitante mais a
  capacidade de gerenciar sua lista de Favoritos.
- **Administrador:** Usuário administrador. Possui acesso ao painel de
  gestão de livros e usuários.

## 3. Requisitos Funcionais (RF)

### Módulo 1: Catálogo e Navegação

- **RF01 — Listagem e Destaques**

  - Exibir uma seção de "Destaques" no topo (livros com `featured: true`).
  - Exibir listagem geral de todos os livros.
  - Critério de Aceite: Animação de entrada (fadeInUp) escalonada nos cards.

- **RF02 — Busca e Filtragem**

  - Busca por Título, Autor ou ISBN.
  - Implementar debounce na busca para performance.
  - Filtrar por categorias pré-definidas (ex.: Ficção, Tecnologia, etc.).
  - Critério de Aceite: Busca funciona combinada com filtro de categoria ativo.

- **RF03 — Visualização de Detalhes (Modal)**

  - Ao clicar em um livro, abrir modal sobreposto.
  - Modal exibe: capa ampliada, título, autor, categoria, ano, ISBN, avaliação (estrelas),
    descrição e botão de compra.
  - Acessibilidade: focus trap no modal e tecla `ESC` fecha o modal.

- **RF04 — Lazy Loading de Imagens**
  - Exibir skeleton e spinner enquanto imagens carregam.
  - Se falhar, substituir por SVG de fallback ("Capa indisponível").

### Módulo 2: Autenticação e Usuários

- **RF05 — Registro de Usuário**

  - Cadastro com: Nome, Email, Senha e Confirmação de Senha.
  - Validações: Email válido (regex), senhas coincidem e email não pode estar duplicado no
    `localStorage`.

- **RF06 — Login**

  - Login via Email e Senha.
  - Botão para ocultar/exibir senha (ícone "olho").
  - Após login, redirecionar para a página principal com saudação personalizada.

- **RF07 — Gestão de Favoritos**
  - Apenas usuários logados podem marcar/desmarcar favoritos (ícone coração).
  - Favoritos persistem vinculados ao email do usuário (chave: `biblioteca_favoritos_{email}`).
  - Visitantes que tentarem favoritar são alertados e redirecionados ao login.

### Módulo 3: Administrativo (Novo)

- **RF08 — Acesso Administrativo**

  - Menu "Admin" exibido apenas para usuário com email de administrador.

- **RF09 — CRUD de Livros**

  - Administrador pode adicionar novos livros via formulário.
  - Administrador pode editar metadados de livros existentes.
  - Administrador pode excluir livros do catálogo.
  - Alterações refletem imediatamente na UI e no `localStorage`.

- **RF10 — Gestão de Usuários**
  - Administrador visualiza lista de usuários registrados.
  - Administrador pode excluir usuários (exceto a própria conta admin).

### Módulo 4: Marketing

- **RF11 — Inscrição em Newsletter**
  - Formulário no rodapé para captura de email.
  - Segurança: Implementação de honeypot (campo oculto `website`) para mitigar bots.

## 4. Requisitos Não Funcionais (RNF)

- **RNF01 — Persistência Local**: Todos os dados (usuários, livros customizados, favoritos)
  são salvos no `localStorage`. Se o cache for limpo, os dados resetam para o padrão (`defaultBooks`).
- **RNF02 — Responsividade**: Layout adaptável para Desktop, Tablet e Mobile (breakpoints em
  `768px` e `480px`). Menu vira "hambúrguer" no mobile.
- **RNF03 — Performance**: Carregamento inicial não deve depender de requisições externas
  (exceto imagens). Imagens possuem tratamento de erro e lazy loading.
- **RNF04 — Segurança (Front-end)**: Senhas salvas no `localStorage` não são criptografadas
  (limitação do MVP/protótipo).
- **RNF05 — Usabilidade**: Feedback visual via toasts (notificações flutuantes) para ações de
  sucesso ou erro.

## 5. Modelo de Dados (localStorage)

A aplicação utiliza as seguintes chaves no armazenamento do navegador:

- `pj_users`: Objeto JSON contendo todos os usuários registrados.

```json
{
  "email@usuario.com": {
    "name": "Nome",
    "email": "email@usuario.com",
    "password": "..."
  }
}
```

- `pj_currentUser`: Sessão atual.

```json
{ "email": "email@usuario.com", "name": "Nome" }
```

- `biblioteca_books`: Array de objetos de livros. Se vazio, carrega a constante `defaultBooks`.
- `biblioteca_favoritos_{email}`: Array de IDs dos livros favoritados por um usuário específico.

## 6. Regras de Negócio

- **Identidade do Administrador:** Permissão admin hardcoded para o email de administrador.
  Qualquer conta com esse email ganha privilégios automaticamente.
- **Unicidade de Email:** Não é permitido mais de um cadastro com o mesmo email.
- **Exclusão de Conta:** Administrador não pode excluir a própria conta via painel (evita lockout).
- **Redirecionamentos:**
  - Acessar `Login.html` estando logado redireciona para `Biblioteca.html`.
  - Tentar favoritar sem logar redireciona para `Login.html`.

## 7. Melhorias Futuras (Backlog)

- Criptografia: Hash das senhas antes de salvar no `localStorage`.
- Backend real: Substituir `localStorage` por API REST e banco de dados.
- Recuperação de senha: Implementar fluxo real (hoje exibe apenas alerta demonstrativo).
- Upload de imagem: Aceitar upload de arquivo ao cadastrar livros (hoje aceita apenas URL).

---
