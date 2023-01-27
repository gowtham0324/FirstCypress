import homepage from "./BrowserInvoke.cy.js";
import { searchbardata, email } from "./sample.js";

describe("E-Commerce Web Testing", () => {
  it("Invoke Brwoser", () => {
    homepage.URL_Invoke();
    cy.contains('Desktops').click()
    // cy.get('.nav > :nth-child(1) > .dropdown-toggle').should('be.hidden').invoke('show')
    cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > a').click()
    cy.go('back')
    cy.wait(4000)
    cy.get("body").then((body) => {
      if (
        body.find(":nth-child(2) > .product-thumb > .caption > h4 > a").length > 0 ) {
        cy.get(":nth-child(2) > .product-thumb > .caption > h4 > a").scrollIntoView().should("be.visible");
        cy.get(":nth-child(2) > .product-thumb > .caption > h4 > a").should("be.visible").click();
        cy.get("#button-cart").click();
        cy.wait(1500);
        cy.get('#button-cart').click();
      } else {
        console.log("No element on the page.........");
      }
    });

    cy.wait(500);
    cy.get("body").then((body) => {
      let num = body.find("#cart-total").text().match(/\d+/)[0];
      console.log(num);
      if (num > 0) {
        if (body.find("#cart > .btn").length > 0) {
          cy.get("#cart > .btn").click();        
          cy.get(":nth-child(5) > .btn > .fa").click();
        } else {
          console.log("This is in else block .......");
        }
      }
    });
    
    cy.wait(500);
    cy.get("body").then((body) => {
      // cy.get("#cart-total").scrollIntoView()
      let num1 = body.find("#cart-total").text().match(/\d+/)[0];
      debugger;
      if (num1>0) {
        console.log('DOne with ')
      }
    });
    cy.get("body").then((body) => {
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a').scrollIntoView().click()
    if (body.find('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a')) {
      cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a').click()
    }
    cy.get('h1').should('be.visible','Terms & Conditions')
 });

  });
});
