const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.reverse();
console.log(frutas.join(", "));

frutas.reverse();
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");
console.log(frutas);