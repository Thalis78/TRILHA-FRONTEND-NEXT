/* ===========================================================================
 * ARQUIVO: window_document_exemplos.js
 *
 * Descrição:
 * Demonstração prática dos principais objetos globais do JavaScript no navegador:
 *
 * 1. WINDOW  – Representa a janela do navegador e oferece controle sobre URL,
 *              histórico, timers, eventos globais e muito mais.
 *
 * 2. DOCUMENT – Representa a árvore DOM e permite manipulação do HTML/CSS/Estrutura.
 *
 * Uso didático para aprendizado de interações básicas com o DOM e recursos do navegador.
 * =========================================================================== */

// =======================
// 🌐 OBJETO GLOBAL: WINDOW
// =======================
{
  // --- window.location ---
  console.log("URL ATUAL:", window.location.href);
  // window.location.reload();
  // window.location.href = "https://pizzariafav.com";

  // --- window.history ---
  // window.history.back();
  // window.history.forward();
  // window.history.go(-2);

  // --- Diálogos nativos do navegador ---
  // window.alert("Olá, isso é um alerta!");
  // const resposta = window.confirm("Você gosta do Thalisson?");
  // const nomePrompt = window.prompt("Qual seu nome?");

  // --- Temporizadores ---
  const timeoutId = window.setTimeout(() => {
    console.log("Executado após 4 segundos");
  }, 4000);

  const intervalId = window.setInterval(() => {
    console.log("Executando a cada 1 segundo");
  }, 1000);

  window.setTimeout(() => {
    window.clearInterval(intervalId);
    console.log("Intervalo parado");
  }, 5000);

  // --- Eventos do window ---
  window.addEventListener("load", () => {
    console.log("Página carregada completamente");
  });

  window.addEventListener("resize", () => {
    console.log(
      `Janela redimensionada: ${window.innerWidth} x ${window.innerHeight}`
    );
  });

  window.addEventListener("scroll", () => {
    console.log("Página rolada para:", window.scrollY);
  });

  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = ""; // Mostra diálogo de confirmação
  });

  // --- Outros recursos importantes ---
  console.log("Largura da tela:", window.screen.width);
  console.log("Altura da tela:", window.screen.height);

  console.log("User agent:", window.navigator.userAgent);
  console.log("Idioma:", window.navigator.language);
  console.log("Está online?", window.navigator.onLine);

  window.scrollTo(0, 0);
  window.scrollTo({ top: 300, behavior: "smooth" });

  console.log(`Janela visível: ${window.innerWidth} x ${window.innerHeight}`);

  if (window.matchMedia("(max-width: 600px)").matches) {
    console.log("Tela pequena detectada");
  }

  // window.open("https://google.com", "_blank");

  const idTimeout = setTimeout(() => console.log("Depois de 2s"), 2000);
  clearTimeout(idTimeout);

  const idInterval = setInterval(() => console.log("Loop a cada 1s"), 1000);
  clearInterval(idInterval);

  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  console.log("Número aleatório seguro:", array[0]);

  // window.localStorage / sessionStorage — serão vistos separadamente
}

// =======================
// 📄 OBJETO: DOCUMENT (DOM)
// =======================
{
  // --- 1. Selecionando elementos ---
  const titulo = document.getElementById("titulo");
  const botao = document.querySelector(".btn");
  const item = document.querySelector("ul li");
  const divs = document.querySelectorAll("div");
  const paragrafos = document.getElementsByTagName("p");
  const inputs = document.getElementsByName("email");
  const botoes = document.getElementsByClassName("btn");

  // --- 2. Manipulando conteúdo ---
  titulo.textContent = "Novo título";
  titulo.innerHTML = "<strong>Negrito</strong>";
  console.log(titulo.textContent);

  // --- 3. Estilo e classes ---
  const box = document.querySelector(".box");
  box.style.color = "red";
  box.style.backgroundColor = "black";
  box.classList.add("ativo");
  box.classList.remove("inativo");
  box.classList.toggle("ativo");

  // --- 4. Criando e removendo elementos ---
  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo item";
  document.querySelector("ul").appendChild(novoItem);
  novoItem.remove();

  // --- 5. Atributos ---
  const link = document.querySelector("a");
  console.log(link.getAttribute("href"));
  link.setAttribute("target", "_blank");
  console.log(link.hasAttribute("rel"));
  link.removeAttribute("rel");

  // --- 6. Eventos no DOM ---
  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    alert("Você clicou!");
  });

  const input = document.querySelector("input");
  input.addEventListener("input", (e) => {
    console.log("Digitando:", e.target.value);
  });

  // --- 7. Métodos úteis ---
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente carregado");
  });

  console.log(document.body);
  console.log(document.head);
  document.title = "Novo título da aba";
}
