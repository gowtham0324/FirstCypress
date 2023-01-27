import homepage from "./BrowserInvoke.cy.js";
import { searchbardata, email } from "./sample.js";

describe("E-Commerce Web Testing", () => {
  it("Desktop section - Test", () => {
    homepage.URL_Invoke();
    homepage.desktopPC();
  });
  it("Add items to cart section - Test", () => {
    homepage.URL_Invoke();
    homepage.addtocart();
  });
  it("Remove the items from cart section - Test", () => {
    homepage.URL_Invoke();
    homepage.addtocart();
    homepage.removecart();
  });
  it("Remove the items from cart section - Test", () => {
    homepage.URL_Invoke();
    homepage.termsandcondition();
  });
});
