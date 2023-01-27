import {obj} from "./sample.js";
import * as data from "./Mydata.json"

describe('Google Webpage',()=>{
    it('Upoload File Test',()=>{
        cy.visit('https://fineuploader.com/demos.html');
        cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile({filePath: "../fixtures/Screenshot_1.png"})
      
    })
})
