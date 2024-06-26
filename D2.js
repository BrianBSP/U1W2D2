/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA: 
const numb1 = 5;
const numb2 = 10;
console.log(
  "I numeri assegnati a numb1 e numb 2 sono rispettivamente: ",
  numb1,
  numb2
);
if (numb1 > numb2) {
  console.log("Il numero maggiore è: ", numb1);
} else {
  console.log("Il numero maggiore è: ", numb2);
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
const numb = 2;

if (numb !== 5) {
  console.log("Errore!! Numero sbagliato");
}
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA:
const numb1 = 14;
risultato = numb1 % 5;
if (risultato === 0) {
  console.log("Il numero inserito è divisibile per 5");
} else {
  console.log("Il numero inserito non è divisibile per 5. MI DISPIACE");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
const num1 = 7;
const num2 = 2;
if ((num1, num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)) {
  console.log("Uno dei numeri o la loro somma/sottrazione è uguale a 8.");
} else {
  console.log("Nessuna condizione corrisponde.");
}
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let totalShoppingCart = 6;
if (totalShoppingCart > 50) {
  console.log("COMPLIMENTI AVRAI LA SPEDIZIONE GRATUITA");
} else {
  console.log(
    "Costi aggiuntivi di spedizione: +10. Per un totale di:",
    totalShoppingCart + 10
  );
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* const carello = [
  (prodotto1 = 20),
  (prodotto2 = 15),
  (prodotto3 = 40), ];  */
/* Avrei potuto creare un array chiamato carrello con 
l'insieme dei prodotti selezionati dall'utente, poi sommare tutti i prezzi al suo interno, quindi applicare lo sconto del 20%. 
Ma dopo una ricerca su google ho visto che non abbiamo ancora affrontato l'argomento. Quindi ho preferito scegliere un alternativa diversa.
 */

/* SCRIVI QUI LA TUA RISPOSTA: Copiato esercizio precedente per poi procedere allo svolgimento.
let totalShoppingCart = 55;
const isBlackFriday = true;
if (isBlackFriday) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100;
  console.log("Il totale del Carrello è:", totalShoppingCart);
}
if (totalShoppingCart > 50) {
  console.log("COMPLIMENTI AVRAI LA SPEDIZIONE GRATUITA");
} else {
  console.log(
    "Costi aggiuntivi di spedizione: +10. Per un totale di:",
    totalShoppingCart + 10
  );
}
 */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA: risopsta sbagliata perché non dovevo usare un array.
const numb1 = 10;
const numb2 = 15;
const numb3 = 5;

const numbs = [numb1, numb2, numb3];
console.log("Ordine sparso dei numeri: ", numb1, numb2, numb3);
numbs = numbs.sort();
console.log("Ecco i numeri in ordine crescente.", numbs); */

/* Svolgimento es. 7:
 
const numb1 = 10;
const numb2 = 15;
const numb3 = 5;

if (numb1 > numb2 && numb1 > numb3) {
  let first = numb1;
  console.log("Primo", first);
  if (numb2 > numb3) {
    let second = numb2;
    let third = numb3;
    console.log("Secondo", second);
    console.log("Terzo", third);
  } else {
    console.log("Secondo", third);
    console.log("Terzo", second);
  }
} else if (numb2 > numb1 && numb2 > numb3) {
  let first = numb2;
  console.log("Primo", first);
  if (numb1 > numb3) {
    console.log("Secondo", numb1);
    console.log("Terzo", numb3);
  } else {
    console.log("Secondo", numb3);
    console.log("Terzo", numb1);
  }
} else {
  console.log("Primo", numb3);
  console.log("Secondo", numb2);
  console.log("Terzo", numb1);
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA:
const indovinello = 1;
console.log(typeof indovinello); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA:
const numb1 = 4;
let risultato = numb1 % 2;

if (risultato === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let val = 10;
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val > 5) {
  console.log("Meno di 10");
} else {
  console.log("Meno di 5");
} */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA:
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};
delete me.lastName;
console.log(me.lastName);
 */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};
delete me.lastName;
console.log(me.lastName);
delete me.skills;
console.log(me.skills);
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let array = [];
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let array = [];
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.pop();
array[9] = 100;
console.log("Sostituisci con il valore ", array[9]);
 */
