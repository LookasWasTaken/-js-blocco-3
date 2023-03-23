/* snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi. */

const animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'alexandro', famiglia: 'fioretti', classe: 'anfibi' },
  { nome: 'mattia', famiglia: 'volpe', classe: 'mammiferi' },
  { nome: 'luca', famiglia: 'piacentini', classe: 'rettili' },
]

const mammiferi = animali.filter(animale => animale.classe === "mammiferi");
console.log("Questi animali sono dei mammiferi", mammiferi);