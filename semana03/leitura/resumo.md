# Resumo

Resumo dos 3. capitulos

1. Valores, Tipos e Operadores
2. Estrutura do Programa
3. Funções

Mais os exercícios, em especial o dia capitulo 3<br>
Funções: **Contando feijões**.

## Variáveis, tipos de dados e operadores

### Variáveis 

**O que são variáveis**
<p>Quando atribuirmos um valor estamos salvando dados que podem ser acessado posteriormente. <br>Variáveis podem ter qualquer nome que inclua letras, números, $ e _, desde que não comecem com números;</p>

**Let ou Const**
<p>

Quando utilizar let ou const?<br><br>

**let** é quando podemos alterar o valor da variável. Exemplo:<br>
Temos a variável **estadoMorada**, que hoje atribuimos o valor de "São Paulo"
```javascript
let estadoMorada = "São Paulo";
```
e digamos que passou uns meses e a pessoa muda de estado e hoje ela mora no Ceará, então seu estadoMorada não é mais "São Paulo"
```javascript
estadoMorada = "Ceará";
```
Ou seja, antes **estadoMorada** era "São Paulo"e hoje é "Ceará"<br>
Com a variável **let** é possível realizar essa mudança de valores. <br>
<br>

**const** é quando o valor não pode ser mudado. Exemplo: Temos a variável **estadoNascimento**, atribuída ao valor "Pará", hoje será Pará e daqui uns meses/anos também, porque não podemos mudar o local de nascimento da pessoa.
```javascript
const estadoNascimento = "Pará";
```
Ou seja, const é imutável. O valor que atribuímos a ela, sempre será o mesmo.

| | |
| -- | -- |
| let | let endereco = 'Rua dos Bobos, nº 0'; |
| const | const PI = 3.14 |
</p>


### O que são tipos de dados?

Tudo o que escrevemos em javascript é um tipo de dado: ex: 13, 'olá', True;<br>

#### string
É uma sequência de zero ou mais caracteres escritos entre aspas.<br> 
```js
let mensagem = "Olá mundo!";
```
Pode ser entre aspas simples 'exe' ou duplas "exe".
- Para sabermos o tamanho de uma string, utilizamos a propriedade length;
- O indexOf(), retorna o primeiro índice em que o elemento pode ser encontrado.
```js
let cat = "Frajola"
cat.indexOf("a") //vai nos retornar onde esta o primeiro a
//2
```
O retorno nesse exemplo será 2<br> Em Javascrit o primeiro indice será 0, o segundo 1, o terceiro 2 ...<br>
O indexOf também diferencia maiúsculas de minúsculas. 

```js
let cat = "FrAjola"
cat.indexOf("a") //vai nos retornar onde esta o primeiro a
//6
```

![string-metodos](../img/string.metodos.png) 


#### Number
É uma variável tipada com número, sem "aspas". <br>

```javascript
let num = 13;
typeof(num); // verifica o tipo de dado.
//number
```

O **number** pode ser inteiro(int) e/ flutuante(float) 
```javascript
let numInteiro = 13;
let numFlutiante = 10.123456;
```

Podemos transformar um **número float em Int.**<br>
Exemplo:<br>
Eu quero que o usuário me passe um número e que sempre ele me retorne int. Mesmo ele colocando float.<br>
Para isso acontece utilizamos o **parseInt()**
```javascript
let myNumber = parseInt("Olá, me passe um número qualquer"); //(ex de um numero informado pelo usuário: 100.254868)
console.log(myNumber); // 100
```
Ou seja, ao utilizarmos parseInt() estamos dizendo que qualquer número após a casa decimal, não será considerado, será descartado<br>
E para sempre recebermos sempre um float, utilizamos o **parseFloat()**<br>

##### Quando usar float ou int ?<br>
Ex: Temos um programa que pergunta a idade da pessoa<br>

```js
let age = "Informe a sua idade, por favor?"; //18
console.log(age) // "18"
```
Se não colocarmos o parseInt ou float, será retornado uma string.<br>
Como precisamos que age seja number, precismos passar uns dos dois(int/float), nesse caso queremos a idade fechada, sem os meses.<br>
Ou seja, será **int**.
```js
let age = parseInt("Informe a sua idade, por favor?"); //18.6
console.log(age) // 18
```

Agora digamos que estamos em uma loja e precisamos saber o valor de um produto.<br>

```js
let price = "Olá, quanto custa esse chocolate? "; // 4.50
```
Como o preço pode ter decimais, nesse caso usariamos o float.
```js
let price = parseFloat("Olá, quanto custa esse chocolate? "); //4.50
console.log(price) //4.50
```

Mais exemplos:

![number](../img/numeros-int-float.png)

Nesses exemplos da imagem, eu utilizei o comando prompt do javascript.<br>
Basicamente exibe uma caixa de diálogo(como se fosse um alert) com uma mensagem opcional solicitando ao usuário a entrada de algum texto.