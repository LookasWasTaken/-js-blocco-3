/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const parole = ["mattia", "Alex", "LUCA", "PaOlO", "fAbIo", "GIULiano", "donATO"];

const letteraMaiuscola = parole.map((parola) => {
    return parola[0].toUpperCase() + parola.slice(1).toLowerCase();
  });
  console.log(letteraMaiuscola);