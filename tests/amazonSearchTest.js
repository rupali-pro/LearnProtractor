const { browser } = require('protractor');
let amazonSearchPage = require('../pom/amazonSearchPage')

describe('dynamic search test', function(){

    let result = element(by.xpath("//span[@class='a-color-state a-text-bold']"));
   
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
       amazonSearchPage.getUrl("https://www.amazon.com/");
    });

    it('amazon dynamic search test', function(){

        amazonSearchPage.findoutSuggestionList1("javascript", "javascript book");
        browser.sleep(5000);
        expect(result.getText()).toContain("javascript book");
        console.log("Test Completed");
    });
});