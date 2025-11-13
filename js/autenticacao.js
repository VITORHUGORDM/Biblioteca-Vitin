export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("pj_currentUser") || "null");
  } catch (_) {
    return null;
  }
}

export function loginPath() {
  return /\/html\//i.test(location.pathname) ? "./Login.html" : "html/Login.html";
}

export function updateAuthUI() {
  const navEl = document.querySelector(".nav");
  if (!navEl) return;
  const user = getCurrentUser();
 
  navEl.querySelectorAll(".nav-user").forEach((el) => el.remove());
 
  const loginLinks = navEl.querySelectorAll(".nav-login");
  loginLinks.forEach((a) => {
    a.style.display = user ? "none" : "";
  });

  if (user) {
    const name = (user.name || user.email || "Usuário").trim();
    const firstName = name.split(" ")[0];

    const container = document.createElement("div");
    container.className = "nav-user";

    const greet = document.createElement("span");
    greet.className = "greet";
    greet.textContent = `Olá, ${firstName}`;

    const logout = document.createElement("a");
    logout.href = "#";
    logout.className = "logout-link";
    logout.textContent = "Sair";
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("pj_currentUser");
      updateAuthUI();
      location.href = loginPath();
    });

    container.appendChild(greet);
    container.appendChild(logout);
    navEl.appendChild(container);
  }
}
