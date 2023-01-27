import {obj} from "./sample.js";
import * as data from "./Mydata.json"

describe('Google Webpage',()=>{
    it('Searching for Keyword',()=>{
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type(data.data[0].email)
        cy.get('.gLFyf').clear()
        cy.get('.gLFyf').type(obj.searchbardata).type('{enter}')
       
        cy.get("body").then((body) => {
            if (body.find('#vplaurlt0 > .pymv4e').length > 0 ) {
                cy.wait(5000)
                cy.reload()
                cy.get('.CCgQ5 > span').click()
            } else {
              console.log("No element on the page.........");
              console.log("HI.........");
            }
          });
        
    
    })
})
