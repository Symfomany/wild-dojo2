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
    prixTTC: 0,
    title: "Mon Super Panier",
    pays: "France",
    paypal: false,
    dateCreated: new Date(),
    promotion: 15, // pourcentage
    tva: function() {
      // pourcentage
      if (this.pays === "France") {
        return 20;
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
        code: "fr"
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
        code: "fr"
        // reduction: 1
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
  panier.articles.forEach(element => {
    if (element.code == "fr") {
      /*console.log(element.quantity);
      console.log(element.prix);*/
      if (element.reduction) {
        // console.log(element.reduction);
        somme +=
          element.quantity * element.prix -
          element.reduction +
          (element.quantity * element.prix - element.reduction) *
            panier.tva() /
            100;
      } else {
        somme +=
          element.quantity * element.prix +
          element.quantity * element.prix * panier.tva() / 100;
      }
    }
  });
  console.log(somme);

  panier.prixTTC = somme;

  console.log(panier.shipping());

  let total = somme + panier.shipping();
  console.log(total);
  console.log(`Le prix TTC du Panier est de ${total}€`);
  //console.log(panier.promotion);

  //console.log(panier.tva());
  //console.log(panier.shipping());

  return panier;
}
// Don't touch...
module.exports = checkout;
