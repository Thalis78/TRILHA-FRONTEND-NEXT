/*

Objetos globais em JavaScript no navegador

1. WINDOW
- É O OBJETO GLOBAL QUE REPRESENTA A JANELA DO NAVEGADOR.
- TUDO QUE EXISTE NO ESCOPO GLOBAL ESTÁ "DENTRO" DO WINDOW.
- POR EXEMPLO, FUNÇÕES COMO ALERT(),CONSOLE.LOG(), E ATÉ VARIAVÉIS GLOBAIS SÃO PROPRIEDADE DE WINDOW.

2. DOCUMENT
- REPRESENTA O DOCUMENTO HTML CARREGADO NA PÁGINA
- É UMA INTERFACE PARA ACESSAR E MANIPULAR O CONTEÚDO, ESTRUTURA E ELEMENTOS HTML DA PÁGINA
- É A PORA PARA O DOM(DOCUMENT OBJECT MODEL).
*/
{
  //   USO DO "WINDOW":

  // ----------- window.location -----------
  // Objeto que manipula a URL e navegação da página

  // EXIBI A URL ATUAL:
  console.log("URL ATUAL:", window.location.href);

  // Recarrega a página:
  // window.location.reload();

  // REDIRECIONA PARA OUTRA PÁGINA
  // window.location.href = "https:pizzariafav.com";

  // ----------- window.history -----------
  // Controla o histórico de navegação do usuário

  // Volta uma página no histórico
  // window.history.back();

  // Avança uma página no histórico
  // window.history.forward();

  // Vai para uma página específica no histórico (ex: -2 volta duas páginas)
  // window.history.go(-2);

  // ----------- diálogos nativos do navegador -----------

  //   alerta simples
  //   window.alert("Olá, isso é um alerta!");

  //   Confirmação, retorna true(OK) ou false (Cancelar)
  //   const resposta = window.confirm("Você gosta do Thalisson?");
  //   console.log(`RESPOSTA CONFIRM ${resposta}`);

  //   PROMPT PARA ENTRADA DE TEXO, RETORNA STRING OU NULL SE CANCELAR
  //   const nomePrompt = window.prompt("Qual seu nome?");
  //   console.log("Nome digitado:", nomePrompt);

  // ----------- temporizadores -----------

  //   Executa uma função uma vez após um tempo (em ms)
  const timeoutId = window.setTimeout(() => {
    console.log("Executado após 4 segundos");
  }, 4000);

  // Executa uma função repetidamente a cada intervalo (em ms)
  const intervalId = window.setInterval(() => {
    console.log("Executando a cada 1 segundo");
  }, 1000);

  //   Para o intervalo criado acima após 5 segundos
  window.setTimeout(() => {
    window.clearInterval(intervalId);
    console.log("Intervalo parado");
  }, 5000);

  // ----------- eventos do window -----------

  //   Evento disparado quando a página termina de carregar
  window.addEventListener("load", () => {
    console.log("Página carregada completamente");
  });

  //  Evento disparado quando janela é redimensionada
  window.addEventListener("resize", () => {
    console.log(
      `Janela redimensionada: ${window.innerWidth} x ${window.innerHeight}`
    );
  });

  // Evento disparado quando a página é rolada
  window.addEventListener("scroll", () => {
    console.log("Página rolada para:", window.scrollY);
  });

  // Evento antes de sair da página (exibe confirmação de saída)
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = ""; // Mostra diálogo padrão de confirmação
  });

  /*
  🪟 window — Outros recursos importantes além dos básicos:

  1. window.console
  - Acesso ao console do navegador (já usado com console.log).
  - Equivalente a window.console.log(), mas usamos só console.log() por simplicidade.

  2. window.screen
  - Informações sobre a tela do dispositivo (resolução física).
  */
  console.log("Largura da tela:", window.screen.width);
  console.log("Altura da tela:", window.screen.height);

  /*
  3. window.navigator
  - Informações sobre o navegador e o sistema.
  */
  console.log("User agent:", window.navigator.userAgent);
  console.log("Idioma:", window.navigator.language);
  console.log("Está online?", window.navigator.onLine);

  /*
  4. window.scrollTo()
  - Rola a página até uma posição.
  */
  window.scrollTo(0, 0); // Vai para o topo
  window.scrollTo({ top: 300, behavior: "smooth" }); // Rolagem suave

  /*
  5. window.innerWidth / innerHeight
  - Tamanho visível da janela (sem barra de rolagem).
  */
  console.log(`Janela visível: ${window.innerWidth} x ${window.innerHeight}`);

  /*
  6. window.matchMedia()
  - Verifica se uma media query CSS está ativa. Muito usado em JS responsivo.
  */
  if (window.matchMedia("(max-width: 600px)").matches) {
    console.log("Tela pequena detectada");
  }

  /*
  7. window.open()
  - Abre nova aba ou janela (muitos navegadores bloqueiam se não for acionado por clique).
  */
  // window.open("https://google.com", "_blank");

  /*
  8. window.setTimeout() e window.setInterval()
  - Já vistos, mas importante lembrar:
  - setTimeout → executa uma vez
  - setInterval → executa em loop
  - Ambos retornam um ID para poder cancelar depois
  */
  const idTimeout = setTimeout(() => console.log("Depois de 2s"), 2000);
  clearTimeout(idTimeout); // Cancela

  const idInterval = setInterval(() => console.log("Loop a cada 1s"), 1000);
  clearInterval(idInterval); // Cancela

  /*
  9. window.localStorage / sessionStorage
  - Armazenamento local (localStorage = permanente, sessionStorage = até fechar aba).
  - Veremos mais detalhado em outra parte.
  */

  /*
  10. window.alert(), confirm(), prompt()
  - Já vistos: caixas nativas do navegador para interação.
  */

  /*
  11. window.frames
  - Acesso a iframes dentro da página (pouco usado atualmente).
  */

  /*
  12. window.crypto
  - Gera dados aleatórios seguros. Útil para senhas ou tokens.
  */
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  console.log("Número aleatório seguro:", array[0]);
}

{
  /*
📄 document — Introdução

- É o ponto de entrada para interagir com o conteúdo da página.
- Ele representa o DOM (Document Object Model), ou seja, a árvore dos elementos HTML.

Principais categorias de uso:
- Seleção de elementos
- Manipulação de conteúdo
- Estilo e classes
- Criação e remoção de elementos
- Eventos no DOM
*/

  // 1. Selecionando elementos

  // Pelo ID
  const titulo = document.getElementById("titulo");

  // Por classe (retorna a primeira ocorrência)
  const botao = document.querySelector(".btn");

  // Por seletor genérico (CSS)
  const item = document.querySelector("ul li");

  // Seleciona todos (retorna NodeList)
  const divs = document.querySelectorAll("div");

  // Por tag
  const paragrafos = document.getElementsByTagName("p");

  // Por nome do atributo name=""
  const inputs = document.getElementsByName("email");

  // Seleciona elementos por classe (retorna HTMLCollection)
  const botoes = document.getElementsByClassName("btn");

  // 2. Manipulando conteúdo

  // Altera só o texto
  titulo.textContent = "Novo título";

  // Permite HTML
  titulo.innerHTML = "<strong>Negrito</strong>";

  // Lê o conteúdo atual
  console.log(titulo.textContent);

  // 3. Estilo e classes

  const box = document.querySelector(".box");

  // Estilizando diretamente
  box.style.color = "red";
  box.style.backgroundColor = "black";

  // Adicionando/removendo classes
  box.classList.add("ativo");
  box.classList.remove("inativo");
  box.classList.toggle("ativo"); // Alterna

  // 4. Criando e removendo elementos

  // Criando
  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo item";
  document.querySelector("ul").appendChild(novoItem);

  // Removendo
  novoItem.remove(); // Remove o elemento criado

  // 5. Atributos

  const link = document.querySelector("a");

  // Lê o valor de um atributo
  console.log(link.getAttribute("href"));

  // Define um novo valor
  link.setAttribute("target", "_blank");

  // Verifica se tem um atributo
  console.log(link.hasAttribute("rel"));

  // Remove atributo
  link.removeAttribute("rel");

  // 6. Eventos no DOM

  const btn = document.querySelector("button");

  // Evento de clique
  btn.addEventListener("click", () => {
    alert("Você clicou!");
  });

  // Evento de digitação
  const input = document.querySelector("input");
  input.addEventListener("input", (e) => {
    console.log("Digitando:", e.target.value);
  });

  // 7. Métodos uteis

  // Esperar o DOM carregar antes de manipular
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente carregado");
  });

  // document.body → representa o <body>
  console.log(document.body);

  // document.head → representa o <head>
  console.log(document.head);

  // document.title → Título da página
  document.title = "Novo título da aba";

  // document.createElement, document.querySelector etc. já vistos.
}
