const anoAtual = 2024;
var anoNascimento = parseInt( prompt("Digite o ano que nasceu:") );
var idade = anoAtual - anoNascimento;
console.log("Sua idade é: " + idade);

// Faça um programa que:
// Leia a altura do usuario
// Verifique a diferença para 1.55
// Utilize parseFloat() para números com decimais

const alturaMinima = 1.55;
var alturaUsuario = parseFloat( prompt("Digite a sua altura:") );
var diferenca = alturaMinima - alturaMinima;
console.log("A diferença é: " + diferenca);

/**
 * exercicio 2
 * 
 * receba 3 nostas de um aluno e apresente a média das nostas 
 */

var nota1 = parseFloat(prompt("Digite a nota 1"));
var nota2 = parseFloat(prompt("Digite a nota 2"));
var nota3 = parseFloat(prompt("Digite a nota 3"));
var media = (nota1 + nota2 + nota3) / 3;
console.log("A média das nota é: " + media);

/** 
 *  ecercicio 3 
 *  pesquise como fazer um calculo de primetro de um circulo
 *  soçicite o ralo de um circulo e calcule o seu perimetro.
 * perimetro = 2 * pi * raio 
 */

const pi = 3.14;
var raio = parseFloat(prompt("Digite o Raio do Circulo:"));
var perimetro = 2 * 3.14 * raio;
console.log("O perimetro é: " + perimetro);





/** 
 * exercicio 4
 * solicite uma temperatura em celsius
 * realize a conversão em farenheit utilizando a formula
 * farenheit = (celsius * 9 / 5) + 32
*/

var temperaturaCelsius = parseFloat(prompt("Digite a Temperatura em Celsius:"));
var temperaturaFarenheit = (temperaturaCelsius* 9 / 5) + 32;
console.log("A temperatura em Farenheit é: " + temperaturaFarenheit);

