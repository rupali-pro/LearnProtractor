const { browser, ExpectedConditions } = require("protractor");

let amazonSearchPage = function(){


    let inputField = element(by.id("twotabsearchtextbox"));
    let suggestionlist = element.all(by.xpath("//div[@id='suggestions']/div"));




    this.getUrl = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
    };

    this.findoutSuggestionList = async function(input, option){

        await inputField.sendKeys(input);
        browser.sleep(2000);
        //browser.wait(ExpectedConditions.visibilityOf(suggestionlist), 3000);
        let listnos = await suggestionlist.count();
        console.log("No.of suggestions available are ==> " + listnos);
        suggestionlist.each(async function(element, index){
            let suggestionText = await element.getAttribute("data-keyword");
            console.log("Suggestions available are ==> " + suggestionText);
           
        });
    };

    this.findoutSuggestionList1 = async function(input, option){

        await inputField.sendKeys(input);
        browser.sleep(2000);
        //browser.wait(ExpectedConditions.visibilityOf(suggestionlist), 3000);
        let listnos = await suggestionlist.count();
        console.log("No.of suggestions available are ==> " + listnos);

        for (let i = 0; i < listnos; i++) {
            let suggestionText = await suggestionlist.get(i).getAttribute("data-keyword");
            console.log(await("Suggestions available are ==> " + suggestionText));

            if (suggestionText == option) {
                suggestionlist.get(i).click();
                
                
            };
            
        };
               
      
    };

};

module.exports = new amazonSearchPage();