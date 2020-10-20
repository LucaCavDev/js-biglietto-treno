//ESERCIZIO: devo calcolare e comunicare al browser il prezzo del biglietto, che varia in base ai km e all'età del cliente.

// la variabile prezzoeffettivo è il costo del biglietto richiesto dal cliente dopo che ci ha fornito la distanza del viaggio e la sua eta. questo è il messaggio che gli mostro nel browser


// raccolgo i dati necessari:

// chiedo all'utente il numero di km che percorrerà nel viaggio
var km = parseInt(prompt("Inserisca la distanza del viaggio in km, non in miglia. Qua siamo in un paese normale mica negli Usa."));

// chiedo l'età
var eta = parseInt(prompt("Inserisca la sua età. Le consigliamo di non mentire per usufruire dello sconto, che poi il controllore verificherà a bordo e le darà una multa bella salata."));

// costo al km = 0.21€ x Km
var costo = 0.21;

// sconto per under 18, 20%(0.042Eu) (costo biglietto U18 = 0.168 Eu x km)
var costou18 = 0.168;

// sconto per over 65, 40%(0.084Eu) (costo biglietto O65 = 0.126 Eu x km)
var costoo65 = 0.126;


if (eta < 18) {
  prezzoeffettivo = costou18 * km;
} else if (eta > 65) {
  prezzoeffettivo = costoo65 * km;
} else {
  prezzoeffettivo = costo * km;
}


document.getElementById("biglietto").innerHTML ="il prezzo del biglietto è: " + prezzoeffettivo;
