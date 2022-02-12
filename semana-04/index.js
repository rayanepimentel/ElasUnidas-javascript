let frutas = ["Banana", "Uva", "Caju", "Abacaxi", "Abacate"];

function estoqueDefrutas(fruta) {
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] === fruta) {
            return `Temos ${fruta} no estoque`;
        }
    }
    return ` Não temos ${fruta} no estoque`;
}

console.log(estoqueDefrutas("caju"))