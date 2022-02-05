//let n = parseInt(prompt("digite um número: "));
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

//console.log(isEven(n));

//outra maneira simplificada

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2)
}


function countBS(value) {
    for (let i = 0; i < value.length; i++) {
        //console.log(value)
        let letra = "B"
        let cat = value.charAt(letra)
        console.log(cat)
        if (cat == letra) {
            //console.log(cat)
        }
    }
}

//console.log(countBS("BolaDeBmaisb"))


function isEvens(n) {
    if (n == 0) {
        console.log(1);
        return true;
    } else if (n == 1) {
        console.log(2);
        return false;
    } else if (n < 0) {
        console.log(3);
        return isEvens(-n);
    } else {
        console.log(4);
        return isEvens(n - 2);
    }
}
//let x = parseInt(prompt("digite um número: "));
//console.log(isEvens(x));
// → true
//console.log(isEvens(75));
// → false
//console.log(isEvens(-1));
// → false