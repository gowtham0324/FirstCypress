class browerInvoke {
  URL_Invoke() {
    cy.clearAllCookies();
    cy.visit("https://naveenautomationlabs.com/opencart/");
    cy.screenshot("Login");
  }
  desktopPC() {
    cy.contains("Desktops").click();
    // cy.get('.nav > :nth-child(1) > .dropdown-toggle').should('be.hidden').invoke('show')
    cy.get(
      ".open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > a"
    ).click();
    cy.screenshot("Desktop_PC");
    cy.go("back");
  }
  addtocart() {
    cy.get("body").then((body) => {
      if (
        body.find(":nth-child(2) > .product-thumb > .caption > h4 > a").length >
        0
      ) {
        cy.get(":nth-child(2) > .product-thumb > .caption > h4 > a")
          .scrollIntoView()
          .should("be.visible");
        cy.get(":nth-child(2) > .product-thumb > .caption > h4 > a")
          .should("be.visible")
          .click();
        cy.get("#button-cart").click();
        cy.wait(5000);
        cy.get("#button-cart").click();
        cy.wait(5000);
        cy.screenshot("Add_To_cart");
      } else {
        console.log("No element on the page.........");
      }
    });
  }
  removecart() {
    cy.wait(1500);
    cy.get("body").then((body) => {
      let num = body.find("#cart-total").text().match(/\d+/)[0];
      console.log(num);
      if (num > 0) {
        if (body.find("#cart > .btn").length > 0) {
          cy.get("#cart > .btn").click();
          cy.get(":nth-child(5) > .btn > .fa").click();
          cy.screenshot("Remove_From_Cart");
        } else {
          console.log("This is in else block .......");
        }
      }
    });
  }
  termsandcondition() {
    cy.get("body").then((body) => {
      if (
        body.find(".row > :nth-child(1) > .list-unstyled > :nth-child(4) > a")
          .length > 0
      ) {
        cy.get(".row > :nth-child(1) > .list-unstyled > :nth-child(4) > a")
          .scrollIntoView()
          .click();
        cy.wait(1000);
        cy.get("h1").should("be.visible", "Terms & Conditions");
        cy.screenshot("TermsAndConditions");
      }
    });
  }
}

module.exports = new browerInvoke();
