// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// definisco le variabili per la creazione di più livelli
var min = 16;
var max = 100;

// per far scegliere il livello di difficoltà
var difficoltà = parseInt(prompt("Inserisci un numero (0, 1 o 2) per selezionare il livello di difficoltà"));
if (difficoltà == 1) {
  max = 80;
} else if (difficoltà == 2){
  max = 50;
}

// dirà all'utente il range
var numberBetween = document.getElementById("numberBetween");
// inserire un numero compreso tra...
numberBetween.innerHTML = "Inserire un numero compreso fra 1 e " + max;

// generazione di min numeri casuali
var totalNumbers = new Array();
// inizializzo l'array
for (var i = 1; i <= max; i++) {
  totalNumbers.push(i);
}
// inserisco i valori nell'array
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
}
// creo una funzione che rimescola i numeri nell'array
var totalMixedNumbers = mescola(totalNumbers);
// rimescolo i numeri dell'array
var loserNumbers = totalMixedNumbers.splice(max-min);
// elimino (max-min) elementi dall'array rimescolato, ottenendo min numeri casuali

var numeriInseriti = new Array();
// inizializzo l'array che conterrà i numeri inseriti dall'utente fuori dalla funzione del button, altrimenti lo reinizializzerebbe ad ogni click

document.getElementById("gioca").addEventListener("click", function(){

  // variabile input
  var inputNumber = document.getElementById("inputNumber").value;

  // varialbile output
  var messaggio = document.getElementById("messaggio");

  // gestisco i casi in cui l'utente non inserisce un numero o lo inserisce non intero
  if (isNaN(inputNumber)) {
    messaggio.innerHTML = "Inserire valori numerici. Il tuo punteggio parziale è: " + numeriInseriti.length;
  } else {
    inputNumber = parseInt(inputNumber);
      // annido un if else per gestire i valori numerici
      if ((inputNumber < 1) || (inputNumber > max))  {
      messaggio.innerHTML = "Inserire valori numerici compresi fra 1 e " + max + ". Il tuo punteggio parziale è: " + numeriInseriti.length;
      // non permetto all'utente di inserire valori al di fuori del range
      } else if (numeriInseriti.includes(inputNumber)) {
      messaggio.innerHTML = "Hai già inserito questo numero, non cercare di imbrogliare. Il tuo punteggio parziale è: " + numeriInseriti.length;
      // fa in modo che l'utente non inserisca numeri che ha già inserito
      } else if (loserNumbers.includes(inputNumber)) {
      messaggio.innerHTML = "Il tuo punteggio finale è: " + numeriInseriti.length;
      // gestisce il caso di finale prematuro di partita a causa dell'inserimento di un numero presente nella lista di numeri perdenti
      }
      else {
      numeriInseriti.push(inputNumber);
      messaggio.innerHTML = "Il tuo punteggio parziale è: " + numeriInseriti.length;
      //  le prove precedenti non hanno dato blocchi, allora aggiungo all'array dei numeri inseriti dall'utente il numero che l'utente sta, per l'appunto, inserendo
      }
  }

  // gestisco il caso limite di vittoria da parte dell'utente
  if (numeriInseriti.length == (max-min)) {
    messaggio.innerHTML = "Hai raggiunto il punteggio massimo di: " + numeriInseriti.length;
  }
});
