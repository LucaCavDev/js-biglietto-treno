var km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log("KM", km);

var age = parseInt(prompt("Quanti anni hai?"));
console.log("Età passeggero", age);

var price = 0.21 * km;
console.log("prezzo base", price);


var price1
var price2

if (age < 18) {
  price1 = price - ((price/100)*20);
  console.log("prezzo scontato under 18", price1);
} else if (age > 65) {
  price2 = price - ((price/100)*40)
  console.log("prezzo scontato over 65", price2);
} else {
  console.log("prezzo biglietto", price);
}

-
