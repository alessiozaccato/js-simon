/* **Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
>
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */


let numberList = document.getElementById("numbers-list");
let answersForm = document.getElementById("answers-form");
let countDown = document.getElementById("countdown");
let stringInstructions = document.getElementById("instructions");
let formNumber = document.getElementsByClassName("form-control");
let goButton = document.querySelector("button");
let finalMessage = document.getElementById("message");

let random = [];
randomNumber(random);
// console.log(random);




// let's create 5 li from js to html
for (let i = 0; i < random.length; i++) {

    const liElement = document.createElement("li");

    liElement.innerHTML = random[i];

    numberList.appendChild(liElement);
}


//let's do the a function to generate random number
function randomNumber(randomNumberArray) {
    for (i = 0; i < 5; i++) {

        let number = [];

        number[i] = Math.floor(Math.random() * 50) + 1;

        randomNumberArray.push(number[i]);
    }
    return randomNumberArray;
}

//let's do a function to create a countdown for hide my random number
const startGame = setInterval(cDown, 1000)

let counter = 30;

function cDown() {
    if (counter == 0) {
        answersForm.classList.remove("d-none");
        numberList.classList.add("d-none");
        stringInstructions.classList.add("d-none");
        countdown.classList.add("d-none");
        clearInterval(startGame);
    } else {
        countDown.innerHTML = counter--;
        countdown.classList.add("text-danger");
    }
    return counter
}

// let's collect data from user input
let userInput = [];
let result = [];

goButton.addEventListener("click", function (event) {
    event.preventDefault();

    for (let i = 0; i < formNumber.length; i++) {
        userInput.push(formNumber[i].value);

        if (random.includes(parseInt(formNumber[i].value))) {
            result.push(formNumber[i].value);
        }

    }
    //return the value doing a control on the length of the result array
    if (result == 0) {
        finalMessage.innerHTML = "Niente da fare non hai indovinato nessun numero"
    } else {
        finalMessage.innerHTML = `Complimenti i numeri da te indovinati sono ${result} e sono ${result.length} `
        finalMessage.classList.replace("text-danger", "text-success");
        finalMessage.classList.add("h4");
    }
    // console.log(userInput);
    // console.log(result, result.length);

})










