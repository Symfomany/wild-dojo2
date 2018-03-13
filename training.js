// construction d'un objet
const objet = {
  prix: 15,
  name: "Je suis un produit",
  caracteristiques: ["bleu", "bois"],
  afficher: function() {
    return `${this.prix}  euros ${this.name}`;
  },
  reduction: function() {
    return this.prix - 5;
  }
};

objet.name = "Nouveau produit";
objet.caracteristiques[1] = "Plastique";

console.log(objet);
console.log(`${objet.afficher()} avec le prix ${objet.prix} `);
console.log(objet.reduction());
console.log(objet);

// parcour de tableau

const prenoms = ["Roxane", "Marlène", "Emilia", "Julien"];

// 1ere  boucle
prenoms.forEach(element => {
  // element c'est l'élément courant dans mes tours de boucle
  console.log(element);
});

// ES6 for..of
for (const element of prenoms) {
  console.log(element);
}

const tab = [2, 4, 6, 8];

let somme = 0;
for (const element of tab) {
  somme = somme + element;
}

console.log(somme);
