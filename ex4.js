//4 - Escreva um programa que pergunte a quantidade de km percorridos 
//por um carro alugado pelo usuário, assim como a quantidade de dias pelos
// quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais 
//por dia e 0,15 centavos por km rodado.

let kmPercorrido=250;
let diasAlugado=7;
let valorPorDia=60*diasAlugado;
let valorPorKm=0.15*kmPercorrido;
let valorTotal=valorPorDia+valorPorKm;

console.log('O preço total do aluguel do carro durante '+diasAlugado+' dias e com '+kmPercorrido+'km percorridos será de '+valorTotal+'R$');

//Resposta: O preço total do aluguel do carro durante 7 dia e com 250km percorridos será de 456.5R$

