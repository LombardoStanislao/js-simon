// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.






$(document).ready(function() {

    var millisecondi = 3 * 1000;

    var arrayNumbers = [];

    var userNumbers = [];

    var numbersRight = [];

    var matchedNumbers = 0;

    for (var i = 0; i < 5; i++) {

        var randomNumbers = getRndInteger(1, 100);

        arrayNumbers.push(randomNumbers);

        console.log(randomNumbers);

        $('.numbers').append('<p>' + randomNumbers + '</p>');
    }

    setTimeout(function() {

        $('.numbers').hide();

    }, millisecondi);

    setTimeout(function() {

        for (var i = 0; i < 5; i++) {

            var numberChoise =  Math.floor(parseInt(prompt('Inserisci un numero da 1 a 100')));
            userNumbers.push(numberChoise);

            if (arrayNumbers.includes(numberChoise)) {

                matchedNumbers += 1;

                numbersRight.push(numberChoise);


            }

        }

        console.log(matchedNumbers);

        $('#userpoint').text('Complimenti! Hai ricordato ' + matchedNumbers + ' numeri')

        $('#numbers-identified').text('I numeri che ti sei ricordato sono: ' + numbersRight)

    }, millisecondi + 1000)

    console.log(arrayNumbers);









    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


});
