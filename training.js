const panier = {
  title: "Mon Panier",
  prix: 12,
  quantity: 3,
  enabled: true,
  total: function() {
    return this.prix * this.quantity * 0.2; // "this" fait référence à l'objet
  }
};

const tableau = [12, 3, 4, 8];

let somme = 0;
for (let index = 0; index < tableau.length; index++) {
  somme += tableau[index];
}

console.log(somme);
