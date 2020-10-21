//ESERCIZIO: devo calcolare e comunicare al browser il prezzo del biglietto, che varia in base ai km e all'età del cliente.

// la variabile prezzoeffettivo è il costo del biglietto richiesto dal cliente dopo che ci ha fornito la distanza del viaggio e la sua eta. questo è il messaggio che gli mostro nel browser


// raccolgo i dati necessari:

// chiedo all'utente il numero di km che percorrerà nel viaggio
var km = parseInt(prompt("Inserisca la distanza del viaggio in km, non in miglia. Qua siamo in un paese normale mica negli Usa."));
console.log("KM", km);
// chiedo l'età
var eta = parseInt(prompt("Inserisca la sua età. Le consigliamo di non mentire per usufruire dello sconto, che poi il controllore verificherà a bordo e le darà una multa bella salata."));
console.log("eta", eta);
// costo al km = 0.21€ x Km
var costo = 0.21;
console.log("costo", costo);
// sconto per under 18, 20%(0.042Eu) (costo biglietto U18 = 0.168 Eu x km)
var costou18 = 0.168;
console.log("costou18", costou18);
// sconto per over 65, 40%(0.084Eu) (costo biglietto O65 = 0.126 Eu x km)
var costoo65 = 0.126;
console.log("costoo65", costoo65);

if (eta < 18) {
  prezzoeffettivo = costou18 * km;
} else if (eta > 65) {
  prezzoeffettivo = costoo65 * km;
} else {
  prezzoeffettivo = costo * km;
}
console.log("prezzoeffettivo", prezzoeffettivo);

// devo limitare i decimali a 2 cifre dopo la virgola:

var prezzorounded = prezzoeffettivo.toFixed(2);
console.log("prezzorounded", prezzorounded);

// OUTPUT FINALE DA MOSTRARE NEL BROWSER
document.getElementById("biglietto").innerHTML = "Il costo monetario di questa lussuosa esperienza è di " + prezzorounded + " Euro, non pagabili a rate.";
