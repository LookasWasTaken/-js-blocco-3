/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

const auto = [
  {
    marca: "Audi",
    modello: "RS1",
    alimentazione: "Diesel",
  },
  {
    marca: "Audi",
    modello: "RS3",
    alimentazione: "Benzina",
  },
  {
    marca: "Opel",
    modello: "Corsa",
    alimentazione: "Benzina",
  },
  {
    marca: "Fiat",
    modello: "500",
    alimentazione: "Elettrica",
  },
  {
    marca: "Tesla",
    modello: "X",
    alimentazione: "Elettrica",
  },
  {
    marca: "Volkswagen",
    modello: "Scirocco",
    alimentazione: "Diesel",
  },
  {
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "Metano",
  },
  {
    marca: "Citroen",
    modello: "C3",
    alimentazione: "GPL",
  },
  {
    marca: "Dacia",
    modello: "Duster",
    alimentazione: "Metano",
  },
  {
    marca: "Lamborghini",
    modello: "Huracán EVO",
    alimentazione: "Benzina",
  },
];

// Auto a Benzina 

const autoBenzina = auto.filter(auto => auto.alimentazione === "Benzina");
console.log("Auto a benzina:", autoBenzina);

// Auto a Diesel

const autoDiesel = auto.filter(auto => auto.alimentazione === "Diesel");
console.log("Auto a Diesel:", autoDiesel);

// Auto di varia Alimentazione 

const autoVarie = auto.filter(auto => auto.alimentazione !== "Benzina" && auto.alimentazione !== "Diesel");
console.log("Auto di varia Alimentazione:", autoVarie);
