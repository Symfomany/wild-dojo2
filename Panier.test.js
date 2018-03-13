const checkout = require("./Panier.js");
const assert = require("chai").assert; // Librarie Chai : http://chaijs.com/guide/installation/

/**
 * All Suite Test
 */
describe("Suite test in Panier Dojo", () => {
  it("test si le panier est bon", done => {
    let articles = checkout();
    assert.equal(articles.length, 5);
    done();
  });
});
