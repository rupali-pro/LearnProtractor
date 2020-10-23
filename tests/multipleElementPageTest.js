let multipleElementPage = require('../pom/multipleElementPage')

describe('Find Multiple Elements Test ', function(){


    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        //multipleELementPage.geturl("https://www.scotiabank.com/ca/en/personal/bank-your-way/accessible-digital-banking.html");
        multipleElementPage.geturl("https://www.amazon.ca/")
    
    });

    xit('find No. of Links available on Page', function(){

       multipleElementPage.findAvailableLinks();
       

    });

    it('find broken Links  on Page', function(){

        multipleElementPage.findBrokenLinks();
        
 
     });

});