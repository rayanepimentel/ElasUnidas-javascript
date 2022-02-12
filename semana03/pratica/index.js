//exer. contando feijoes

//passo 01

// function countBs(palavra){
//   let quantidade = 0;
//   for(let i = 0; i < palavra.length; i++){
//     if(palavra[i] === "B") {
//       quantidade += 1;
//     }
//   }
//   return quantidade
// };

//console.log(countBs("BananaBdebBBBB"));


//passo 2
function countChar(palavra, letra) {
    let quantidade = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) === letra) {
            quantidade += 1;
        }
    }
    return quantidade
}

console.log(countChar("iniciando", "i"));


//refatorando function countBs()
function countBs(palavra) {
    return countChar(palavra, "B");
}

console.log(countBs("BananaBdebBBBB"));