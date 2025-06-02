// TIPOS DE VARIÁVEIS EM JAVASCRIPT

// 'var' é a forma mais antiga de declarar variáveis
var nome = "João"; // Pode ser redeclarada e tem escopo de função

// 'let' é usada para declarar variáveis que podem mudar depois
let idade = 30; // Tem escopo de bloco

// 'const' é usada para declarar variáveis constantes (não podem ser alteradas)
const PI = 3.14; // Uma vez definido, não pode ser reatribuído

// TIPOS DE DADOS EM JAVASCRIPT

// Number (número inteiro ou decimal)
let numeroInteiro = 10;
let numeroDecimal = 5.5;

// String (texto entre aspas simples ou duplas)
let cidade = "São Paulo";

// Boolean (verdadeiro ou falso)
let aprovado = true;

// Undefined (variável declarada, mas sem valor)
let endereco;
console.log(endereco); // undefined

// Null (ausência intencional de valor)
let salario = null;

// Object (estrutura com pares de chave-valor)
let pessoa = {
  nome: "Maria",
  idade: 25,
};

// Array (lista de valores)
let frutas = ["maçã", "banana", "laranja"];

// Exibindo valores
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("PI:", PI);
console.log("Pessoa:", pessoa);
console.log("Frutas:", frutas);
