/*Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

 Na inicialização devemos declarar três variáveis 
   Indice (Limite da soma)
   Soma (Armazena o resultado)
   k (Contador)

   Portando devemos realizar uma laço de repetição com a condição: Enquanto o K for menor que o indice, 
   então vou incrementar o k em 1 e somar o valor atual de k à variavel soma. */

   let INDICE = 13;
   let SOMA = 0;
   let K = 0;

   while (K < INDICE){
      K++;
      SOMA += K;
   }

   console.log("Ao final do processamento, o valor da variável soma é:", SOMA);

   

