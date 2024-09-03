function inverterString (str){

   let strInvertida = ''  ;
   for (let i = str.length - 1; i >= 0; i--){
      strInvertida += str[i];
   } 
   return strInvertida;
}

const entradaUsuario = prompt("Digite uma string que você deseja inverter: ");
if (entradaUsuario !== null){
   const resultado = inverterString(entradaUsuario);
   console.log("String invertida: ", resultado);
}