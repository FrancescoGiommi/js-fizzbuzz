/* TRACCIA:

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//# PROCEDURA

//# RACCOLTA DATI
let multipleOf3 = "Fizz";
let multipleOf5 = "Buzz";
let multipleBoth3And5 = "FizzBuzz";
let i = 1;

//# ELABORAZIONE

/*stampo i numeri da 1 a 100*/
for (let i = 1; i <= 100; i++) {
  console.log(i);

  /*per i multipli di 3 stampo "Fizz"*/
  if (i % 3 === 0) {
    console.log(multipleOf3);

    /*per i multipli di 5 stampo "Buzz"*/
  } else if (i % 5 === 0) {
    console.log(multipleOf5);

    /*per i numeri sia di 3 che di 5 stampo "FizzBuzz"*/
  } else if (i % 3 && i % 5) {
    console.log(multipleBoth3And5);
  }
}

//# OUTPUT

console.log(`
multipleOf3: ${multipleOf3}
multipleOf5: ${multipleOf5}
multipleBoth3And5: ${multipleBoth3And5}
i: ${i}
`);
