import { getCurrentUser, updateAuthUI, loginPath } from "./autenticacao.js";


const USERS_KEY = "pj_users";
function getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); } catch { return {}; } }
function saveUsers(obj) { localStorage.setItem(USERS_KEY, JSON.stringify(obj)); }
function showMessage(el, text, type = "success") {
  if (!el) return;
  el.textContent = text;
  el.classList.remove("success", "error");
  el.classList.add(type === "success" ? "success" : "error");
  el.style.display = "block";
  setTimeout(() => { if (el) el.style.display = "none"; }, 3500);
}
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }


function setLoginHeroCover() {
  const el = document.querySelector(".auth-side.with-cover");
  if (!el) return;
  const url = COVERS[Math.floor(Math.random() * COVERS.length)] || COVERS[0];
  el.style.setProperty(
    "background-image",
    `linear-gradient(rgba(11,18,32,.35), rgba(11,18,32,.35)), url('${url}')`,
    "important"
  );
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
}

document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();
  try { setLoginHeroCover(); } catch (_) { }

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const goToRegisterLink = document.getElementById("goToRegisterLink");
  const goToLoginLink = document.getElementById("goToLoginLink");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const loginMessage = document.getElementById("loginMessage");
  const registerMessage = document.getElementById("registerMessage");
  const togglePasswordButtons = document.querySelectorAll(".toggle-password");

  function showLogin() { if (loginForm) loginForm.style.display = "grid"; if (registerForm) registerForm.style.display = "none"; }
  function showRegister() { if (loginForm) loginForm.style.display = "none"; if (registerForm) registerForm.style.display = "grid"; }

  if (goToRegisterLink) goToRegisterLink.addEventListener("click", (e) => { e.preventDefault(); showRegister(); });
  if (goToLoginLink) goToLoginLink.addEventListener("click", (e) => { e.preventDefault(); showLogin(); });
  if (forgotPasswordLink) forgotPasswordLink.addEventListener("click", (e) => { e.preventDefault(); showMessage(loginMessage, "Recurso demonstrativo. Informe seu email e prossiga.", "success"); });

  togglePasswordButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;
      const input = document.getElementById(targetId);
      if (!input) return;
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.textContent = isHidden ? "🙈" : "👁️";
      btn.setAttribute("aria-label", isHidden ? "Ocultar senha" : "Mostrar senha");
    });
  });

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (registerForm.querySelector("#regName") || {}).value?.trim() || "";
      const email = (registerForm.querySelector("#regEmail") || {}).value?.trim().toLowerCase() || "";
      const password = (registerForm.querySelector("#regPassword") || {}).value || "";
      const confirm = (registerForm.querySelector("#regPasswordConfirm") || {}).value || "";
      if (!name || !email || !password) return showMessage(registerMessage, "Preencha todos os campos.", "error");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMessage(registerMessage, "Email inválido.", "error");
      if (password !== confirm) return showMessage(registerMessage, "As senhas não coincidem.", "error");
      const users = getUsers();
      if (users[email]) return showMessage(registerMessage, "Já existe uma conta com esse email.", "error");
      users[email] = { name, email, password }; saveUsers(users);
      showMessage(registerMessage, "Cadastro realizado! Faça login.", "success");
      registerForm.reset(); showLogin();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (loginForm.querySelector("#loginEmail") || {}).value?.trim().toLowerCase() || "";
      const password = (loginForm.querySelector("#loginPassword") || {}).value || "";
      if (!email || !password) return showMessage(loginMessage, "Preencha email e senha.", "error");
      const users = getUsers(); const user = users[email];
      if (!user) return showMessage(loginMessage, "Usuário não encontrado.", "error");
      if (user.password !== password) return showMessage(loginMessage, "Senha incorreta.", "error");
      localStorage.setItem("pj_currentUser", JSON.stringify({ email: user.email, name: user.name }));
      showMessage(loginMessage, `Olá, ${user.name}! Login realizado.`, "success");
      loginForm.reset();
      setTimeout(() => {
        const target = /\/html\//i.test(location.pathname)
          ? "./Biblioteca.html"
          : "html/Biblioteca.html";
        window.location.href = target;
      }, 700);
    });
  }
});
