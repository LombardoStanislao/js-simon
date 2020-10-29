// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi

// Creo la variabile contenente i secondi di countdown
var countdown = 30;

// Creo l'intervallo di tempo in cui deve stampar a pagina il countdown
var timeout = setInterval(function() {

    $('#countdown-numbers').text(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(timeout);
    }

}, 1000);


$(document).ready(function() {

// Variabile utile in futuro se aggiungerò la possibilità di chieder all'utente
// quanti millisecondi vuole aspettare

    var millisecondi = 30 * 1000;

// Array che riempirò con i numeri casuali dati dal pc
    var arrayNumbers = [];

// Array che riempierò con i numeri inseriti dall'utente
    var userNumbers = [];

// Array che riempirò con i numeri indovinati dall'utente
    var numbersRight = [];

// Variabile che conterà quanti numeri inseriti sono corretti
    var matchedNumbers = 0;


// Ciclo while per far inserire al pc esattamente 5 numeri diversi tra loro
    while (arrayNumbers.length < 5) {

        var randomNumbers = getRndInteger(1, 100);

// Controllo che i numeri siano tutti diversi
        if (arrayNumbers.includes(randomNumbers)) {

        } else {
            arrayNumbers.push(randomNumbers);

            console.log(randomNumbers);

// Stampo in pagina il numero inserito dal pc

            $('.numbers').append('<p>' + randomNumbers + '</p>');
        }


    }

// Timeout che fa sparire i numeri del pc
    setTimeout(function() {

        $('.numbers').hide();

    }, millisecondi + 1000);

// Timeout che imposta i secondi dopo cui l'utente deve inserir i numeri
    setTimeout(function() {


// Ciclo che fa inserir i numeri all'utente finchè il suo array non sarà di 5

        do {
            var numberChoise =  Math.floor(parseInt(prompt('Inserisci un numero da 1 a 100')));

// Controllo che sia un numbero

            if (isNaN(numberChoise)) {
                alert('Devi inserire un numero')

// Controllo che il numero inserito non sia uguale ad uno precedentemente

            } else if (userNumbers.includes(numberChoise)) {

                alert('Devi inserire solo numeri diversi fra loro')

// Se va tutto bene procedo
            } else {

// Pusho il numero nell'array che contiene tutti i numeri inseriti dall'utente
                userNumbers.push(numberChoise);

// Se l'array del pc contiene il numero inserito...
                if (arrayNumbers.includes(numberChoise)) {

// Aumento la variabile matchedNumbers di 1
                    matchedNumbers += 1;

// E pusho il numero nell'array di numeri indovinati
                    numbersRight.push(numberChoise);

                }
            }

// La condizione è "finchè l'array dei numeri dell'utente non arriva a 5"
        } while (userNumbers.length < 5);

        console.log(matchedNumbers);
        
// Stampo in pagina i vari risultati
        $('#numbers-selected').text('I numeri che hai inserito sono: ' + userNumbers)

        $('#userpoint').text('Complimenti! Hai ricordato ' + matchedNumbers + ' numeri')

        $('#numbers-identified').text('I numeri che ti sei ricordato sono: ' + numbersRight)



    }, millisecondi + 2000)

    console.log(arrayNumbers);


    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


});
