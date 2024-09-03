/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

Primeiramente criarei um paramentro num para o valor a ser verificado.
as variaveis a e b indicam os primeiros dois numeros da sequencia 0 e 1
Loop for para controlarmos a iteração manualmente
Identificar condições de verdadeiro e falso.

*/

function pertenceFibonacci(num) {
if (num < 0){
   return false;
}

let a =0, b= 1;
while (a < num){
   let temp = a;
   a = b;
   b = temp + b;
}

return a === num;
}
function checkFibinacii(){
   const num = parseInt(prompt("Digite um numero "), 10);
   if (isNaN(num)){
      console.log("Por favor insira um numero inteiro valido");
   }else if (pertenceFibonacci(num)){
      console.log(`O numero ${num} pertence a sequencia`);
   }else {
      console.log(`O numero ${num} não pertence a sequencia`);
   }
}

checkFibinacii();