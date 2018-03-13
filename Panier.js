/**
 * ES6 Function : Objet
 *
 * But: Calculer le Prix TTC du Panier
 *
 */
function checkout(promotion = 20) {
  const panier = {
    prixTTC: 0,
    title: "Mon Super Panier",
    pays: "France",
    paypal: false,
    dateCreated: new Date(),
    promotion,
    tva: function() {
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
        reduction: 5,
        code: "es"
      },
      {
        title: "Article Six",
        quantity: 2,
        prix: 20,
        code: "fr"
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

  return panier;
}

console.log(checkout(10));

// Don't touch...
module.exports = checkout;
