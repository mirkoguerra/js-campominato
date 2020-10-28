// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

function mescola(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
  // restituisce un array mescolato
}

// generazione di 16 numeri casuali
var totalNumbers = new Array();
// inizializzo l'array
for (var i = 1; i <= 100; i++) {
  totalNumbers.push(i);
}
// inserisco i valori nell'array
var totalMixedNumbers = mescola(totalNumbers);
// rimescolo i numeri dell'array
var loserNumbers = totalMixedNumbers.splice( 84);
// elimino 84 elementi dall'array rimescolato, ottenendo 16 numeri casuali

var numeriInseriti = new Array();
// inizializzo l'array che conterrà i numeri inseriti dall'utente fuori dalla funzione del button, altrimenti lo reinizializzerebbe ad ogni click

document.getElementById("gioca").addEventListener("click", function(){

  // variabile input
  var inputNumber = parseInt(document.getElementById("inputNumber").value);

  // varialbili output
  var messaggioErrore = document.getElementById("errore");
  var punteggio = document.getElementById("punteggio");

  numeriInseriti.push(inputNumber);
  // aggiungo all'array dei numeri inseriti dall'utente il numero che l'utente sta, per l'appunto, inserendo

});
