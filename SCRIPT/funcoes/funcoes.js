/*
No JavaScript existem 3 jeitos principais de criar funções:

1. Função normal:
   - Forma tradicional.
   - Tem seu próprio 'this'.
   - Pode ser usada antes de ser declarada.

2. Função anônima:
   - Função sem nome guardada numa variável.
   - Usada bastante em callbacks.
   - Precisa ser declarada antes de usar.

3. Arrow function:
   - Sintaxe curta e simples.
   - Não tem 'this' próprio, herda do lugar onde foi criada.
   - Ideal para funções pequenas e callbacks.

No desenvolvimento web, use:
- Função normal quando precisar do 'this' do objeto.
- Função anônima para callbacks simples.
- Arrow function para código mais curto e evitar problemas com 'this'.
*/

// 1. Função normal (declarada)
function somaNormal(a, b) {
  return a + b;
}

// 2. Função anônima (atribuída a uma variável)
const somaAnonima = function (a, b) {
  return a + b;
};

// 3. Arrow Function
const somaArrow = (a, b) => {
  return a + b;
};

// Também pode simplificar a arrow function se só tem retorno:
const somaArrowSimplificada = (a, b) => a + b;

// Testando as funções
console.log(somaNormal(2, 3));
console.log(somaAnonima(2, 3));
console.log(somaArrow(2, 3));
console.log(somaArrowSimplificada(2, 3));

// Contexto de Objeto

// Uso da função normal
// Funções normais têm o próprio this, que aponta para o objeto que chamou a função

const obj = {
  nome: "Thalisson",
  falar: function () {
    console.log(this.nome);
  },
};

obj.falar();

// Uso com Arrow Function
// As Arrow Function não tem this próprio, não funciona como método de objeto para acessar suas propriedades, então passa os valores por parâmetro.

const objArrow = {
  nome: "Thalisson",
  falar: (nome) => {
    console.log(nome);
  },
};

objArrow.falar(objArrow.nome);
