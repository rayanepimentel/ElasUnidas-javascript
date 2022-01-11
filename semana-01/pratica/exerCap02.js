//retornar trianqulo
let linha = "#";

for (var i = 0; i < 8; i++) {
    console.log(linha, "1")
    linha += "#"
}


// while (linha.length <= 7) {
//     console.log(linha, "2");
//     linha += "#";
// }

for (let i = "#"; i.length < 8; i += "#") {
    console.log(i, "3");
}

//FizzBuzz

for (var i = 0; i < 15; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    };

    console.log(i);
}

for (var i = 0; i < 16; i++) {

    let texto = "";
    if (i % 3 === 0) {
        texto += "Fizz";
    };
    if (i % 5 === 0) {
        texto += "Buzz";
    };

    console.log(texto || i);
};

let size = 8;

let board = "";

for (let l1 = 0; l1 < size; l1++) {
    for (let l2 = 0; l2 < size; l2++) {
        if ((l1 + l2) % 2 == 0) {
            board += " "
        } else {
            board += "#"
        }
    }
    board += "\n";
}

console.log(board);