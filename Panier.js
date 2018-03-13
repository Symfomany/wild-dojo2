/**
 * ES6 Function : Objet
 *
 * But: Calculer le Prix TTC du Panier
 *console.log("hello");
  panier.articles.forEach(element => {
    if (panier.articles.code === "fr") {
      panier.prix += panier.articles.prix;
      return panier.prix;
    }
  });
  console.log(prix);
  return panier;
  (vincent)
 */
function checkout() {
  // Le Panier
  const panier = {
    title: "Mon Super Panier",
    prixTTC: 0,
    pays: "France",
    paypal: false,
    promotion: 15, // pourcentage
    tva: function() {
      if (this.pays === "France") {
        return 20; // pourcentage
      } else if (this.pays === "UK") {
        return 10;
      }
      return 0;
    },
    shipping: function() {
      if (this.paypal) {
        return 0;
      }
      return this.prixTTC * 0.25;
    },

    articles: [
      {
        title: "Article One",
        quantity: 2,
        prix: 235,
        code: "fr"
      },
      {
        title: "Article Two",
        quantity: 1,
        prix: 125,
        reduction: 10, // en euro
        code: "en"
      },
      {
        title: "Article Three",
        quantity: 1,
        prix: 100.25,
        code: "fr"
      },
      {
        title: "Article Four",
        quantity: 3,
        prix: 52,
        code: "fr",
        reduction: 10
      },
      {
        title: "Article Five",
        quantity: 2,
        prix: 40,
        reduction: 5, // euro
        code: "es"
      },
      {
        title: "Article Six",
        quantity: 2,
        prix: 20,
        code: "fr",
        reduction: 5
      },
      {
        title: "Article Seven",
        quantity: 1,
        prix: 10,
        code: "de"
      }
    ]
  };

  // your code here...
  let somme = 0;
  for (const element of panier.articles) {
    if (element.code === "fr") {
      if (element.reduction) {
        somme = somme + (element.prix * element.quantity - element.reduction);
        //console.log(somme);
      } else {
        somme = somme + element.prix * element.quantity;
        //console.log(somme);
      }

      //  console.log(element.prix * element.quantity);
    }
  }
  let total = somme - somme * panier.promotion / 100;
  total = total + total * panier.tva() / 100;
  console.log(total);
  panier.prixTTC = total;
  console.log(panier.prixTTC);
  let prixLivraison = panier.shipping();
  console.log(prixLivraison);
  let prixTotal = panier.prixTTC + prixLivraison;
  console.log(prixTotal);
  console.log(`Le prix total à payer est de ${prixTotal}`);
  // console.log(somme);
  // const somme = element.prix * element.quantity;

  // let somme = 0;
  // for (const element.fr of panier){
  // somme = somme + element.fr;
  // }
  // console.log(panier.prixTTC);

  return panier;
}
// Don't touch...
module.exports = checkout;
