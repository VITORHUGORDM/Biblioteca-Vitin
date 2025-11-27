const defaultBooks = [
  {
    id: 1,
    title: "Abismo",
    author: "Léo Alves",
    category: "Ficção",
    year: 2020,
    rating: 4.8,
    image: "../images/covers/abismo.jpg",
    description:
      "Uma obra envolvente que explora os mistérios do universo e da mente humana. Uma narrativa profunda que questiona a realidade e nos leva a refletir sobre nossa existência.",
    isbn: "978-8532529",
    amazonLink: "https://www.amazon.com.br/s?k=Abismo+Leo+Alves+livro",
    featured: true,
  },
  {
    id: 2,
    title: "Coleção de Livros Inspiradores",
    author: "Vários Autores",
    category: "Desenvolvimento",
    year: 2021,
    rating: 4.6,
    image: "../images/covers/colecao-inspiradores.jpg",
    description:
      "Uma compilação de histórias e ensinamentos que transformam vidas. Ideal para quem busca inspiração e crescimento pessoal. Cada história é uma lição de vida.",
    isbn: "978-8532530",
    amazonLink: "https://www.amazon.com.br/s?k=Colecao+Livros+Inspiradores",
    featured: true,
  },
  {
    id: 3,
    title: "Capas Que Vendem",
    author: "Eldes Saullo",
    category: "Design",
    year: 2019,
    rating: 4.5,
    image: "../images/covers/capas-vendem.jpg",
    description:
      "Descubra os segredos das capas de livros que atraem leitores. Um guia essencial para autores e designers que desejam criar capas impactantes.",
    isbn: "978-8532531",
    amazonLink: "https://www.amazon.com.br/s?k=Capas+Que+Vendem+livro",
    featured: true,
  },
  {
    id: 4,
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    category: "Desenvolvimento",
    year: 2012,
    rating: 4.7,
    image: "../images/covers/poder-habito.jpg",
    description:
      "Entenda como os hábitos funcionam e como você pode transformar sua vida através deles. Um livro revolucionário que mudou a forma como entendemos o comportamento humano.",
    isbn: "978-8532532",
    amazonLink:
      "https://www.amazon.com.br/s?k=O+Poder+do+Habito+Charles+Duhigg",
    featured: false,
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "História",
    year: 2011,
    rating: 4.8,
    image: "../images/covers/sapiens.jpg",
    description:
      "Uma jornada pela história da humanidade, desde o surgimento do Homo sapiens até os dias modernos. Uma perspectiva única e fascinante sobre nossa espécie.",
    isbn: "978-8532533",
    amazonLink: "https://www.amazon.com.br/s?k=Sapiens+Yuval+Noah+Harari",
    featured: false,
  },
  {
    id: 6,
    title: "Mindset",
    author: "Carol S. Dweck",
    category: "Desenvolvimento",
    year: 2006,
    rating: 4.6,
    image: "../images/covers/mindset.jpg",
    description:
      "Descubra como a mentalidade fixa ou de crescimento pode transformar seu sucesso. Um livro que mudou a vida de milhões de pessoas ao redor do mundo.",
    isbn: "978-8532534",
    amazonLink: "https://www.amazon.com.br/s?k=Mindset+Carol+Dweck",
    featured: false,
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    category: "Ficção",
    year: 1949,
    rating: 4.5,
    image: "../images/covers/1984-novo.jpg",
    description:
      "Um clássico da ficção científica que explora um futuro distópico e assustador. Uma obra que continua relevante e provocadora até hoje.",
    isbn: "978-8532535",
    amazonLink: "https://www.amazon.com.br/s?k=1984+George+Orwell",
    featured: false,
  },
  {
    id: 8,
    title: "O Código da Vinci",
    author: "Dan Brown",
    category: "Mistério",
    year: 2003,
    rating: 4.3,
    image: "../images/covers/codigo-vinci.jpg",
    description:
      "Uma emocionante aventura repleta de mistérios, símbolos e reviravoltas surpreendentes. Um livro que mantém o leitor na beira do assento do início ao fim.",
    isbn: "978-8532536",
    amazonLink: "https://www.amazon.com.br/s?k=Codigo+da+Vinci+Dan+Brown",
    featured: false,
  },
  {
    id: 9,
    title: "Rápido e Devagar",
    author: "Daniel Kahneman",
    category: "Psicologia",
    year: 2011,
    rating: 4.7,
    image: "../images/covers/rapido-devagar.jpg",
    description:
      "Explore os dois sistemas de pensamento que governam nossas decisões. Um livro fascinante sobre como pensamos e tomamos decisões.",
    isbn: "978-8532537",
    amazonLink: "https://www.amazon.com.br/s?k=Rapido+Devagar+Daniel+Kahneman",
    featured: false,
  },
  {
    id: 10,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasia",
    year: 1937,
    rating: 4.8,
    image: "../images/covers/hobbit.jpg",
    description:
      "Uma aventura épica em um mundo mágico cheio de criaturas fantásticas. O clássico que iniciou uma das maiores sagas da literatura.",
    isbn: "978-8532538",
    amazonLink: "https://www.amazon.com.br/s?k=O+Hobbit+Tolkien",
    featured: false,
  },
  {
    id: 11,
    title: "Inteligência Emocional",
    author: "Daniel Goleman",
    category: "Desenvolvimento",
    year: 1995,
    rating: 4.5,
    image: "../images/covers/inteligencia-emocional.jpg",
    description:
      "Aprenda como a inteligência emocional pode ser mais importante que o QI. Um livro que revolucionou nossa compreensão da inteligência.",
    isbn: "978-8532539",
    amazonLink: "https://www.amazon.com.br/s?k=Inteligencia+Emocional+Goleman",
    featured: false,
  },
  {
    id: 12,
    title: "A Revolução Digital",
    author: "Klaus Schwab",
    category: "Tecnologia",
    year: 2016,
    rating: 4.6,
    image: "../images/covers/revolucao-digital.jpg",
    description:
      "Entenda como a tecnologia está transformando a sociedade e o futuro do trabalho. Uma visão essencial para o século XXI.",
    isbn: "978-8532540",
    amazonLink: "https://www.amazon.com.br/s?k=Revolucao+Digital+Klaus+Schwab",
    featured: false,
  },
  {
    id: 13,
    title: "Hábitos Atômicos",
    author: "James Clear",
    category: "Desenvolvimento",
    year: 2018,
    rating: 4.9,
    image: "../images/covers/habitos-atomicos.jpg",
    description:
      "Pequenas mudanças, resultados extraordinários. Um guia prático para construir bons hábitos e eliminar os ruins.",
    isbn: "978-8532541",
    amazonLink: "https://www.amazon.com.br/s?k=Habitos+Atomicos+James+Clear",
    featured: false,
  },
  {
    id: 14,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    category: "Fantasia",
    year: 1954,
    rating: 4.9,
    image: "../images/covers/senhor-aneis.jpg",
    description:
      "A épica definitiva da fantasia. Uma obra-prima que definiu o gênero e continua fascinando gerações de leitores.",
    isbn: "978-8532542",
    amazonLink: "https://www.amazon.com.br/s?k=Senhor+dos+Aneis+Tolkien",
    featured: false,
  },
  {
    id: 15,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    category: "Ficção",
    year: 1813,
    rating: 4.7,
    image: "../images/covers/orgulho-preconceito.jpg",
    description:
      "Um romance clássico que permanece relevante após séculos. A história de Elizabeth Bennet e Mr. Darcy é inesquecível.",
    isbn: "978-8532543",
    amazonLink: "https://www.amazon.com.br/s?k=Orgulho+Preconceito+Jane+Austen",
    featured: false,
  },
  {
    id: 16,
    title: "O Homem em Busca de Sentido",
    author: "Viktor Frankl",
    category: "Desenvolvimento",
    year: 1946,
    rating: 4.8,
    image: "../images/covers/homem-sentido.jpg",
    description:
      "Uma história poderosa de sobrevivência e descoberta de significado. Um livro que inspira e transforma perspectivas sobre a vida.",
    isbn: "978-8532544",
    amazonLink: "https://www.amazon.com.br/s?k=Homem+Busca+Sentido+Frankl",
    featured: false,
  },
  {
    id: 17,
    title: "O Alquimista",
    author: "Paulo Coelho",
    category: "Ficção",
    year: 1988,
    rating: 4.6,
    image: "../images/covers/alquimista.jpg",
    description:
      "Uma jornada mágica em busca do tesouro pessoal. Uma fábula moderna que toca o coração de milhões de leitores.",
    isbn: "978-8532545",
    amazonLink: "https://www.amazon.com.br/s?k=Alquimista+Paulo+Coelho",
    featured: false,
  },
  {
    id: 18,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psicologia",
    year: 2011,
    rating: 4.7,
    image: "../images/covers/thinking-fast.jpg",
    description:
      "Descubra como nossas mentes funcionam e por que cometemos erros sistemáticos. Um livro essencial sobre comportamento humano.",
    isbn: "978-8532546",
    amazonLink: "https://www.amazon.com.br/s?k=Thinking+Fast+Slow+Kahneman",
    featured: false,
  },
  {
    id: 19,
    title: "O Poder do Agora",
    author: "Eckhart Tolle",
    category: "Desenvolvimento",
    year: 1997,
    rating: 4.7,
    image: "../images/covers/poder-agora.jpg",
    description:
      "Aprenda a viver no presente e transformar sua vida. Um guia espiritual que mudou a vida de milhões de pessoas.",
    isbn: "978-8532547",
    amazonLink: "https://www.amazon.com.br/s?k=Poder+do+Agora+Eckhart+Tolle",
    featured: false,
  },
  {
    id: 20,
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    category: "Desenvolvimento",
    year: 1997,
    rating: 4.6,
    image: "../images/covers/pai-rico.jpg",
    description:
      "Lições de finanças pessoais através de uma história inspiradora. Um livro que mudou a forma como as pessoas pensam sobre dinheiro.",
    isbn: "978-8532548",
    amazonLink: "https://www.amazon.com.br/s?k=Pai+Rico+Pai+Pobre+Kiyosaki",
    featured: false,
  },
  {
    id: 21,
    title: "A Menina que Roubava Livros",
    author: "Markus Zusak",
    category: "Ficção",
    year: 2005,
    rating: 4.8,
    image: "../images/covers/menina-roubava.jpg",
    description:
      "Uma história tocante ambientada na Alemanha nazista. Um livro que celebra o poder das palavras e da humanidade.",
    isbn: "978-8532549",
    amazonLink: "https://www.amazon.com.br/s?k=Menina+Roubava+Livros+Zusak",
    featured: false,
  },
  {
    id: 22,
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    category: "História",
    year: 1947,
    rating: 4.7,
    image: "../images/covers/diario-anne.jpg",
    description:
      "O relato comovente de uma jovem durante o Holocausto. Um documento histórico que continua relevante e inspirador.",
    isbn: "978-8532550",
    amazonLink: "https://www.amazon.com.br/s?k=Diario+Anne+Frank",
    featured: false,
  },
  {
    id: 23,
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    category: "Ficção",
    year: 1866,
    rating: 4.6,
    image: "../images/covers/crime-castigo.jpg",
    description:
      "Uma obra-prima da literatura russa que explora culpa, redenção e moralidade. Um livro profundo e perturbador.",
    isbn: "978-8532551",
    amazonLink: "https://www.amazon.com.br/s?k=Crime+Castigo+Dostoievski",
    featured: false,
  },
  {
    id: 24,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    category: "Ficção",
    year: 1943,
    rating: 4.9,
    image: "../images/covers/pequeno-principe.jpg",
    description:
      "Uma fábula poética sobre amor, perda e o significado da vida. Um clássico que toca crianças e adultos.",
    isbn: "978-8532552",
    amazonLink: "https://www.amazon.com.br/s?k=Pequeno+Principe+Saint+Exupery",
    featured: false,
  },
  {
    id: 25,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    category: "Ficção",
    year: 1967,
    rating: 4.7,
    image: "../images/covers/cem-anos.jpg",
    description:
      "Uma saga familiar épica em um mundo mágico. Uma obra-prima do realismo mágico que define gerações.",
    isbn: "978-8532553",
    amazonLink: "https://www.amazon.com.br/s?k=Cem+Anos+Solidao+Garcia+Marquez",
    featured: false,
  },
  {
    id: 26,
    title: "O Senhor das Moscas",
    author: "William Golding",
    category: "Ficção",
    year: 1954,
    rating: 4.5,
    image: "../images/covers/senhor-moscas.jpg",
    description:
      "Uma alegoria perturbadora sobre a natureza humana e a civilização. Um livro que questiona nossas suposições.",
    isbn: "978-8532554",
    amazonLink: "https://www.amazon.com.br/s?k=Senhor+Moscas+William+Golding",
    featured: false,
  },
  {
    id: 27,
    title: "Mulheres que Correm com Lobos",
    author: "Clarissa Pinkola Estés",
    category: "Desenvolvimento",
    year: 1992,
    rating: 4.6,
    image: "../images/covers/mulheres-lobos.jpg",
    description:
      "Uma exploração da natureza selvagem feminina. Um livro empoderador que celebra a força das mulheres.",
    isbn: "978-8532555",
    amazonLink: "https://www.amazon.com.br/s?k=Mulheres+Correm+Lobos+Pinkola",
    featured: false,
  },
  {
    id: 28,
    title: "O Fantástico Sr. Raposo",
    author: "Roald Dahl",
    category: "Ficção",
    year: 1970,
    rating: 4.7,
    image: "../images/covers/raposo.jpg",
    description:
      "Uma aventura divertida e criativa sobre um raposo astuto. Um livro que encanta leitores de todas as idades.",
    isbn: "978-8532556",
    amazonLink: "https://www.amazon.com.br/s?k=Fantastico+Sr+Raposo+Roald+Dahl",
    featured: false,
  },
  {
    id: 29,
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    category: "Ficção",
    year: 1945,
    rating: 4.6,
    image: "../images/covers/revolucao-bichos.jpg",
    description:
      "Uma alegoria política sobre poder e corrupção. Uma sátira brilhante que permanece relevante.",
    isbn: "978-8532557",
    amazonLink: "https://www.amazon.com.br/s?k=Revolucao+Bichos+George+Orwell",
    featured: false,
  },
  {
    id: 30,
    title: "O Retrato de Dorian Gray",
    author: "Oscar Wilde",
    category: "Ficção",
    year: 1890,
    rating: 4.5,
    image: "../images/covers/dorian-gray.jpg",
    description:
      "Uma história gótica sobre vaidade, beleza e corrupção moral. Uma obra clássica da literatura inglesa.",
    isbn: "978-8532558",
    amazonLink: "https://www.amazon.com.br/s?k=Retrato+Dorian+Gray+Oscar+Wilde",
    featured: false,
  },
];

let books = loadBooks();

function loadBooks() {
  try {
    const stored = localStorage.getItem("biblioteca_books");
    return stored ? JSON.parse(stored) : defaultBooks;
  } catch {
    return defaultBooks;
  }
}

function saveBooks() {
  localStorage.setItem("biblioteca_books", JSON.stringify(books));
}

const categories = [
  "Todos",
  "Ficção",
  "Desenvolvimento",
  "História",
  "Mistério",
  "Psicologia",
  "Fantasia",
  "Design",
  "Tecnologia",
];
let currentCategory = "Todos";
let searchTerm = "";
let favorites = new Set();

import { updateAuthUI } from "./autenticacao.js";

function getFavoritesKey() {
  const u = getCurrentUser && getCurrentUser();
  return u ? `biblioteca_favoritos_${u.email}` : null;
}
function loadFavorites() {
  const key = getFavoritesKey();
  favorites = new Set(key ? JSON.parse(localStorage.getItem(key) || "[]") : []);
}
function saveFavorites() {
  const key = getFavoritesKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify([...favorites]));
}
let currentModalBookId = null;
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const featuredBooksContainer = document.getElementById("featuredBooks");
const allBooksContainer = document.getElementById("allBooks");
const categoriesFilter = document.getElementById("categoriesFilter");
const modal = document.getElementById("bookModal");
const closeBtn = document.getElementById("closeModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const booksTitle = document.getElementById("booksTitle");
const noResults = document.getElementById("noResults");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const newsletterForm = document.getElementById("newsletterForm");
const favoriteBooksContainer = document.getElementById("favoriteBooks");
const noFavorites = document.getElementById("noFavorites");
const modalFavBtn = document.getElementById("modalFavBtn");

// Notification function
function showNotification(message, type = "info") {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Admin functions
function setupAdmin() {
  const adminTabs = document.querySelectorAll(".admin-tab");
  const adminPanels = document.querySelectorAll(".admin-panel");

  adminTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      adminTabs.forEach((t) => t.classList.remove("active"));
      adminPanels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById(tab.dataset.tab + "-panel");
      if (panel) panel.classList.add("active");
    });
  });

  const addBookForm = document.getElementById("addBookForm");
  if (addBookForm) {
    addBookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = parseInt(addBookForm.dataset.editId);
      if (editId) {
        // Update existing book
        const index = books.findIndex((b) => b.id === editId);
        if (index !== -1) {
          books[index] = {
            ...books[index],
            title: document.getElementById("bookTitle").value,
            author: document.getElementById("bookAuthor").value,
            category: document.getElementById("bookCategory").value,
            year: parseInt(document.getElementById("bookYear").value),
            rating: parseFloat(document.getElementById("bookRating").value),
            image: document.getElementById("bookImage").value,
            description: document.getElementById("bookDescription").value,
            isbn: document.getElementById("bookIsbn").value,
            amazonLink: document.getElementById("bookAmazonLink").value,
            featured: document.getElementById("bookFeatured").checked,
          };
          saveBooks();
          renderAllBooks();
          renderFeaturedBooks();
          renderAdminBooks();
          addBookForm.reset();
          delete addBookForm.dataset.editId;
          const submitBtn = addBookForm.querySelector("button[type='submit']");
          submitBtn.textContent = "Adicionar Livro";
          showNotification("Livro atualizado com sucesso!", "success");
        }
      } else {
        // Add new book
        const newBook = {
          id: Date.now(),
          title: document.getElementById("bookTitle").value,
          author: document.getElementById("bookAuthor").value,
          category: document.getElementById("bookCategory").value,
          year: parseInt(document.getElementById("bookYear").value),
          rating: parseFloat(document.getElementById("bookRating").value),
          image: document.getElementById("bookImage").value,
          description: document.getElementById("bookDescription").value,
          isbn: document.getElementById("bookIsbn").value,
          amazonLink: document.getElementById("bookAmazonLink").value,
          featured: document.getElementById("bookFeatured").checked,
        };
        books.push(newBook);
        saveBooks();
        renderAllBooks();
        renderFeaturedBooks();
        renderAdminBooks();
        addBookForm.reset();
        showNotification("Livro adicionado com sucesso!", "success");
      }
    });
  }

  renderAdminBooks();
  renderAdminUsers();

  // Add event listeners for admin buttons
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      if (e.target.dataset.bookId) {
        const id = parseInt(e.target.dataset.bookId);
        deleteBook(id);
      } else if (e.target.dataset.userEmail) {
        const email = e.target.dataset.userEmail;
        deleteUser(email);
      }
    } else if (e.target.classList.contains("btn-edit")) {
      const id = parseInt(e.target.dataset.bookId);
      editBook(id);
    }
  });
}

function renderAdminBooks() {
  const container = document.getElementById("adminBooksList");
  if (!container) return;
  container.innerHTML = "";
  books.forEach((book) => {
    const item = document.createElement("div");
    item.className = "admin-book-item";
    item.innerHTML = `
      <div class="admin-book-info">
        <h4>${book.title}</h4>
        <p>Autor: ${book.author} | Categoria: ${book.category} | Ano: ${book.year}</p>
      </div>
      <div class="admin-book-actions">
        <button class="btn-edit" data-book-id="${book.id}">Editar</button>
        <button class="btn-delete" data-book-id="${book.id}">Excluir</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderAdminUsers() {
  const container = document.getElementById("adminUsersList");
  if (!container) return;
  container.innerHTML = "";
  const users = getUsers();
  Object.keys(users).forEach((email) => {
    const user = users[email];
    const item = document.createElement("div");
    item.className = "admin-book-item";
    item.innerHTML = `
      <div class="admin-book-info">
        <h4>${user.name}</h4>
        <p>Email: ${user.email}</p>
      </div>
      <div class="admin-book-actions">
        <button class="btn-delete" data-user-email="${email}">Excluir</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function deleteUser(email) {
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.email === email) {
    showNotification("Você não pode excluir sua própria conta!", "error");
    return;
  }
  if (confirm(`Tem certeza que deseja excluir o usuário ${email}?`)) {
    const users = getUsers();
    delete users[email];
    localStorage.setItem("pj_users", JSON.stringify(users));
    renderAdminUsers();
    showNotification("Usuário excluído com sucesso!", "success");
  }
}

function deleteBook(id) {
  if (confirm("Tem certeza que deseja excluir este livro?")) {
    books = books.filter((book) => book.id !== id);
    saveBooks();
    renderAllBooks();
    renderFeaturedBooks();
    renderAdminBooks();
  }
}

function editBook(id) {
  const book = books.find((b) => b.id === id);
  if (!book) return;

  document.getElementById("bookTitle").value = book.title;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookCategory").value = book.category;
  document.getElementById("bookYear").value = book.year;
  document.getElementById("bookRating").value = book.rating;
  document.getElementById("bookImage").value = book.image;
  document.getElementById("bookDescription").value = book.description;
  document.getElementById("bookIsbn").value = book.isbn;
  document.getElementById("bookAmazonLink").value = book.amazonLink;
  document.getElementById("bookFeatured").checked = book.featured;

  // Change form to update mode
  const form = document.getElementById("addBookForm");
  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.textContent = "Atualizar Livro";
  form.dataset.editId = id;
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("pj_users") || "{}");
  } catch {
    return {};
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderCategories();
  renderFeaturedBooks();
  renderAllBooks();
  loadFavorites();
  renderFavorites();
  setupEventListeners();
  updateAuthUI();
  setupAdmin();
  setLoginHeroCover();

  try {
    const u = getCurrentUser();
    if (u && /\/Login\.html$/i.test(location.pathname)) {
      location.href = "./Biblioteca.html";
    }
  } catch (_) {}
});

// Util: debounce
function debounce(fn, delay = 250) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  };
}
function isFavorite(bookId) {
  return favorites.has(bookId);
}

function toggleFavorite(bookId) {
  if (!getCurrentUser()) {
    showNotification("Faça login para favoritar livros.", "error");
    window.location.href = loginPath();
    return;
  }
  if (favorites.has(bookId)) {
    favorites.delete(bookId);
  } else {
    favorites.add(bookId);
  }
  saveFavorites();
  renderFavorites();
  renderFeaturedBooks();
  renderAllBooks();
  updateModalFavBtn();
}

function setFavBtnState(btn, fav) {
  if (!btn) return;
  btn.classList.toggle("active", fav);
  btn.textContent = fav ? "❤️" : "♡";
  btn.setAttribute(
    "aria-label",
    fav ? "Remover dos favoritos" : "Adicionar aos favoritos"
  );
  btn.setAttribute(
    "title",
    fav ? "Remover dos favoritos" : "Adicionar aos favoritos"
  );
}

function updateModalFavBtn() {
  if (!modalFavBtn || currentModalBookId == null) return;
  setFavBtnState(modalFavBtn, isFavorite(currentModalBookId));
}
function renderCategories() {
  categoriesFilter.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = `category-btn ${category === "Todos" ? "active" : ""}`;
    btn.textContent = category;
    btn.addEventListener("click", () => filterByCategory(category));
    categoriesFilter.appendChild(btn);
  });
}
function renderFeaturedBooks() {
  const featured = books.filter((book) => book.featured);
  featuredBooksContainer.innerHTML = "";

  featured.forEach((book, index) => {
    const bookCard = createBookCard(book);
    bookCard.style.animationDelay = `${index * 0.1}s`;
    featuredBooksContainer.appendChild(bookCard);
  });
}
function renderAllBooks() {
  const filtered = filterBooks();
  allBooksContainer.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    booksTitle.textContent = "Nenhum livro encontrado";
  } else {
    noResults.style.display = "none";
    booksTitle.textContent =
      searchTerm || currentCategory !== "Todos"
        ? `Resultados (${filtered.length})`
        : "Todos os Livros";

    filtered.forEach((book, index) => {
      const bookCard = createBookCard(book);
      bookCard.style.animationDelay = `${(index % 8) * 0.05}s`;
      allBooksContainer.appendChild(bookCard);
    });
  }
}
function renderFavorites() {
  if (!favoriteBooksContainer) return;
  if (!getCurrentUser()) {
    favoriteBooksContainer.innerHTML = "";
    if (noFavorites) {
      noFavorites.style.display = "block";
      const title = noFavorites.querySelector(".no-results-content p");
      const subtitle = noFavorites.querySelector(".no-results-subtitle");
      if (title) title.textContent = "Faça login para ver seus favoritos";
      if (subtitle)
        subtitle.textContent =
          "Entre na sua conta para salvar e acessar favoritos";
    }
    return;
  }
  const favBooks = books.filter((b) => favorites.has(b.id));
  favoriteBooksContainer.innerHTML = "";

  if (favBooks.length === 0) {
    noFavorites.style.display = "block";
    return;
  }

  noFavorites.style.display = "none";
  favBooks.forEach((book, index) => {
    const card = createBookCard(book);
    card.style.animationDelay = `${(index % 8) * 0.05}s`;
    favoriteBooksContainer.appendChild(card);
  });
}
function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";

  const fav = isFavorite(book.id);

  card.innerHTML = `
    <button class="fav-btn ${fav ? "active" : ""}" data-id="${
    book.id
  }" aria-label="${
    fav ? "Remover dos favoritos" : "Adicionar aos favoritos"
  }" title="${
    getCurrentUser()
      ? fav
        ? "Remover dos favoritos"
        : "Adicionar aos favoritos"
      : "Faça login para favoritar"
  }">${fav ? "❤️" : "♡"}</button>
    <div class="image-wrapper">
      <div class="skeleton" aria-hidden="true"></div>
      <div class="spinner book-spinner" aria-hidden="true" style="display:none"></div>
      <img src="${book.image}" alt="${
    book.title
  }" class="book-image" loading="lazy">
    </div>
    <div class="book-info">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <div class="book-meta">
        <span class="book-category">${book.category}</span>
        <span class="book-rating">⭐ ${book.rating}</span>
      </div>
    </div>
  `;
  card.addEventListener("click", (e) => {
    if (e.target.closest(".fav-btn")) return;
    openModal(book);
  });

  const favBtn = card.querySelector(".fav-btn");
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(book.id);
  });

  // image load/fallback handling
  const img = card.querySelector(".book-image");
  const wrapper = card.querySelector(".image-wrapper");
  const spinner = card.querySelector(".book-spinner");
  const skeleton = card.querySelector(".skeleton");
  if (img && wrapper && spinner && skeleton) {
    spinner.style.display = "block";
    skeleton.style.display = "block";
    img.style.visibility = "hidden";
    img.addEventListener(
      "load",
      () => {
        spinner.style.display = "none";
        skeleton.style.display = "none";
        img.style.visibility = "visible";
        wrapper.classList.add("loaded");
      },
      { once: true }
    );
    img.addEventListener(
      "error",
      () => {
        img.src = FALLBACK_IMG;
        img.alt = `${book.title} (capa indisponível)`;
        spinner.style.display = "none";
        skeleton.style.display = "none";
        img.style.visibility = "visible";
        wrapper.classList.add("loaded");
      },
      { once: true }
    );
  }

  return card;
}
function filterBooks() {
  return books.filter((book) => {
    const matchesCategory =
      currentCategory === "Todos" || book.category === currentCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
function filterByCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent === category) {
      btn.classList.add("active");
    }
  });
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }

  renderAllBooks();
  setTimeout(() => {
    document
      .querySelector(".books-section")
      .scrollIntoView({ behavior: "smooth" });
  }, 100);
}
function searchBooks(term, shouldScroll = false) {
  searchTerm = (term || "").toLowerCase();
  renderAllBooks();
  if (shouldScroll && filterBooks().length > 0) {
    setTimeout(() => {
      document
        .querySelector(".books-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}
function openModal(book) {
  currentModalBookId = book.id;

  const imgEl = document.getElementById("modalImage");
  const modalSpinner = document.getElementById("modalImgSpinner");
  if (modalSpinner) modalSpinner.style.display = "block";
  if (imgEl) {
    imgEl.removeAttribute("aria-hidden");
    imgEl.src = book.image;
    const onDone = () => {
      if (modalSpinner) modalSpinner.style.display = "none";
    };
    imgEl.onload = onDone;
    imgEl.onerror = () => {
      imgEl.src = FALLBACK_IMG;
      onDone();
    };
  }

  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.textContent = book.title;

  const authorEl = document.getElementById("modalAuthor");
  if (authorEl) authorEl.textContent = `por ${book.author}`;

  const catEl = document.getElementById("modalCategory");
  if (catEl) catEl.textContent = book.category;

  const yearEl = document.getElementById("modalYear");
  if (yearEl) yearEl.textContent = book.year;

  const isbnEl = document.getElementById("modalISBN");
  if (isbnEl) isbnEl.textContent = book.isbn;

  const ratingEl = document.getElementById("modalRating");
  if (ratingEl) {
    ratingEl.innerHTML = `${[...Array(5)]
      .map(
        (_, i) =>
          `<span style="color: ${
            i < Math.floor(book.rating) ? "#f59e0b" : "#d1d5db"
          }; font-size: 18px;">★</span>`
      )
      .join("")} ${book.rating}/5`;
  }

  const descEl = document.getElementById("modalDescription");
  if (descEl) descEl.textContent = book.description;

  const amazonA = document.getElementById("amazonLink");
  if (amazonA) {
    amazonA.href = book.amazonLink;
    amazonA.textContent = "🛒 Comprar na Amazon";
  }

  updateModalFavBtn();

  if (modal) {
    modal.classList.add("show");
    setupModalA11y();
  }
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  currentModalBookId = null;
  teardownModalA11y();
}
function setupEventListeners() {
  if (searchInput) {
    // Atualiza resultados com debounce, sem rolar a página
    const debounced = debounce((value) => {
      searchBooks(value, false);
    }, 250);
    searchInput.addEventListener("input", (e) => debounced(e.target.value));
    // Só rola para os resultados quando pressionar Enter
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchBooks(searchInput.value, true);
    });
  }

  // Clique no botão de busca também rola para os resultados
  if (searchBtn)
    searchBtn.addEventListener("click", () =>
      searchBooks(searchInput.value, true)
    );
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (typeof closeModalBtn !== "undefined" && closeModalBtn)
    closeModalBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  if (menuToggle)
    menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

  document
    .querySelectorAll(".nav-link")
    .forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("active"))
    );
  if (newsletterForm) {
    const msg = document.getElementById("newsletterMessage");
    const btn = document.getElementById("newsletterSubmitBtn");
    const honeypot = document.getElementById("newsletterWebsite");
    function showMsg(text, type = "success") {
      if (!msg) return;
      msg.textContent = text;
      msg.classList.remove("success", "error");
      msg.classList.add(type === "success" ? "success" : "error");
      msg.style.display = "block";
      setTimeout(() => {
        if (msg) msg.style.display = "none";
      }, 4000);
    }
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput =
        newsletterForm.querySelector("input[type='email']") ||
        newsletterForm.querySelector("input");
      const email = (emailInput ? emailInput.value : "").trim();
      if (honeypot && honeypot.value) return; // bot
      if (!email) {
        showMsg("Informe um e-mail.", "error");
        return;
      }
      if (!isValidEmail(email)) {
        showMsg("E-mail inválido.", "error");
        return;
      }
      if (btn) {
        btn.disabled = true;
        btn.dataset.originalText = btn.textContent;
        btn.textContent = "Enviando...";
      }
      // Simula requisição
      setTimeout(() => {
        showMsg("Inscrição realizada! Verifique seu e-mail.", "success");
        newsletterForm.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = btn.dataset.originalText || "Inscrever-se";
        }
      }, 900);
    });
  }
}
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav-btn[data-id]");
  if (btn) {
    e.stopPropagation();
    if (!getCurrentUser()) {
      showNotification("Faça login para favoritar livros.", "error");
      window.location.href = loginPath();
      return;
    }
    const id = Number(btn.dataset.id);
    toggleFavorite(id);
  }
});
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("pj_currentUser") || "null");
  } catch (e) {
    return null;
  }
}

function setLoginHeroCover() {
  if (!/\/Login\.html$/i.test(location.pathname)) return;
  try {
    const el = document.querySelector(".auth-side");
    if (!el || !Array.isArray(books) || books.length === 0) return;
    const candidates = books.filter((b) => b && b.image);
    if (candidates.length === 0) return;
    const book = candidates[Math.floor(Math.random() * candidates.length)];
    let url = book.image || "";
    if (/^\.\.\//.test(url)) {
      url = url.replace(/^\.+\//, "/");
    }
    if (!url.startsWith("/")) url = "/" + url;

    el.style.setProperty(
      "background-image",
      `linear-gradient(rgba(11,18,32,.35), rgba(11,18,32,.35)), url('${url}')`,
      "important"
    );
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  } catch (_) {}
}

// a11y: modal focus trap, Esc closes, restore focus
let __modalKeydownHandler = null;
let __lastFocusedEl = null;
function setupModalA11y() {
  if (!modal) return;
  const dialog = modal.querySelector(".modal-content");
  if (!dialog) return;
  __lastFocusedEl = document.activeElement;
  const focusableSelectors = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "iframe",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(",");
  const getFocusable = () =>
    Array.from(dialog.querySelectorAll(focusableSelectors)).filter(
      (el) => el.offsetParent !== null
    );
  const focusables = getFocusable();
  (focusables[0] || dialog).focus();

  __modalKeydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key === "Tab") {
      const f = getFocusable();
      if (f.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  dialog.addEventListener("keydown", __modalKeydownHandler);
}
function teardownModalA11y() {
  if (!modal) return;
  const dialog = modal.querySelector(".modal-content");
  if (dialog && __modalKeydownHandler)
    dialog.removeEventListener("keydown", __modalKeydownHandler);
  __modalKeydownHandler = null;
  if (__lastFocusedEl && typeof __lastFocusedEl.focus === "function") {
    try {
      __lastFocusedEl.focus();
    } catch (_) {}
  }
  __lastFocusedEl = null;
}

// Fallback image (SVG data URI)
const FALLBACK_IMG =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='560'>\
<rect width='100%' height='100%' fill='%23f3f4f6'/>\
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='20'>Capa%20indisponivel</text>\
</svg>";

(function () {
  const USERS_KEY = "pj_users";

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveUsers(obj) {
    localStorage.setItem(USERS_KEY, JSON.stringify(obj));
  }

  function showMessage(el, text, type = "success") {
    if (!el) return;
    el.textContent = text;
    el.classList.remove("success", "error");
    el.classList.add(type === "success" ? "success" : "error");
    el.style.display = "block";
    setTimeout(() => {
      if (el) el.style.display = "none";
    }, 4000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showLoginBtn = document.getElementById("showLoginBtn");
    const showRegisterBtn = document.getElementById("showRegisterBtn");
    const goToRegisterLink = document.getElementById("goToRegisterLink");
    const goToLoginLink = document.getElementById("goToLoginLink");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const loginMessage = document.getElementById("loginMessage");
    const registerMessage = document.getElementById("registerMessage");
    if (!loginForm && !registerForm) return;

    function showLogin() {
      if (loginForm) loginForm.style.display = "grid";
      if (registerForm) registerForm.style.display = "none";
    }

    function showRegister() {
      if (loginForm) loginForm.style.display = "none";
      if (registerForm) registerForm.style.display = "grid";
    }

    if (showLoginBtn) showLoginBtn.addEventListener("click", showLogin);
    if (showRegisterBtn)
      showRegisterBtn.addEventListener("click", showRegister);
    if (goToRegisterLink)
      goToRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        showRegister();
      });
    if (goToLoginLink)
      goToLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLogin();
      });
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        showMessage(
          loginMessage,
          "Recurso demonstrativo: informe seu email e clique em Fazer Login para receber instruções.",
          "success"
        );
      });
    }

    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name =
          (registerForm.querySelector("#regName") || {}).value?.trim() || "";
        const email =
          (registerForm.querySelector("#regEmail") || {}).value
            ?.trim()
            .toLowerCase() || "";
        const password =
          (registerForm.querySelector("#regPassword") || {}).value || "";
        const confirm =
          (registerForm.querySelector("#regPasswordConfirm") || {}).value || "";

        if (!name || !email || !password) {
          showMessage(
            registerMessage,
            "Por favor preencha todos os campos.",
            "error"
          );
          return;
        }

        if (!isValidEmail(email)) {
          showMessage(registerMessage, "Email inválido.", "error");
          return;
        }

        if (password !== confirm) {
          showMessage(registerMessage, "As senhas não coincidem.", "error");
          return;
        }

        const users = getUsers();
        if (users[email]) {
          showMessage(
            registerMessage,
            "Já existe uma conta com esse email.",
            "error"
          );
          return;
        }

        users[email] = { name, email, password };
        saveUsers(users);

        showMessage(
          registerMessage,
          "Cadastro realizado com sucesso! Faça login.",
          "success"
        );
        registerForm.reset();
        showLogin();
      });
    }

    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email =
          (loginForm.querySelector("#loginEmail") || {}).value
            ?.trim()
            .toLowerCase() || "";
        const password =
          (loginForm.querySelector("#loginPassword") || {}).value || "";

        if (!email || !password) {
          showMessage(loginMessage, "Preencha email e senha.", "error");
          return;
        }

        const users = getUsers();
        const user = users[email];
        if (!user) {
          showMessage(loginMessage, "Usuário não encontrado.", "error");
          return;
        }

        if (user.password !== password) {
          showMessage(loginMessage, "Senha incorreta.", "error");
          return;
        }

        localStorage.setItem(
          "pj_currentUser",
          JSON.stringify({ email: user.email, name: user.name })
        );
        showMessage(
          loginMessage,
          `Olá, ${user.name}! Login realizado.`,
          "success"
        );
        loginForm.reset();
        setTimeout(() => {
          window.location.href = "./Biblioteca.html";
        }, 800);
      });
    }
  });
})();
