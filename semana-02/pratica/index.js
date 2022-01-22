let n = parseInt(prompt("digite um número: "));
//prompt("digite um número: ");
//console.log(typeof(n), n);


function isEven(par) {
    let xuxu = Math.sign(par) // negativo = -1 e positivo = 1
    console.log(xuxu);

    // if (par % 2 == 0) {
    //     return true
    // } else
    // if (par % 2 != 0 && par > 0) {
    //     return false
    // } else {
    //     return "??"
    // }

    if (par % 2 == 0 && xuxu == 1) {
        return true
    } else
    if (par % 2 != 0 && xuxu == 1) {
        return false
    } else {
        return "??"
    }
}

console.log(isEven(n));