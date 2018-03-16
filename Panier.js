/**
 * ES6 Function : Objet
 *
 * But: Calculer le Prix TTC du Panier
 *
 */
function checkout() {
  // Le Panier
  const panier = {
    prixTTC: 0,
    title: "Mon Super Panier",
    pays: "France",
    paypal: false,
    dateCreated: new Date(),
    promotion: 15,
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

  let subTotal = 0;
  panier.articles.forEach(element => {
    if (element.code === "fr") {
      if (element.reduction) {
        let subTotal =
          subTotal + element.quantity * element.prix - element.reduction;
      } else {
        subTotal = subTotal + element.quantity * element.prix;
      }
    }
  });
  console.log(`Le montant hors taxe est de ${subTotal}`);
  let totalTva = subTotal * panier.tva() / 100;
  console.log(`Le montant de la tva est de ${totalTva}`);
  subTotal += totalTva;
  panier.prixTTC = subTotal;
  console.log(`Le montant ttc est de ${panier.prixTTC}`);
  let specialDiscount = panier.prixTTC * panier.promotion / 100;
  console.log(`Le montant de la promotion est de ${specialDiscount}`);
  panier.prixTTC -= specialDiscount;
  console.log(`Le prix ttc apres la promotion est de ${panier.prixTTC}`);
  shippCost = panier.shipping();
  console.log(`Le montant des shippCost est de ${shippCost}`);
  panier.prixTTC += shippCost;
  let finalPrice = Math.round(panier.prixTTC);
  console.log(`Le Prix TTC du Panier est de ${finalPrice}`);

  return panier;
}

// console.log(checkout(10));
checkout();

// Don't touch...
module.exports = checkout;
