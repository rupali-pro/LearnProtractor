const { element, browser } = require("protractor");

let buttonPage = function(){

    let gotoHomeButton = element(by.buttonText("Goto Home"));
    let locationButton = $('#position');
    let colorButton = element(by.id("color"));
    let dimensionButton = element(by.id("property"));
    let disableButton = element(by.css('[title = "Disabled button"]'));


    this.getUrl = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
    };

    this.getButtonText = async function(){
       let text = await gotoHomeButton.getText();
       expect(text).toEqual("Goto Home");
    };

    this.getButtonPosition = async function(){
        let location = await locationButton.getLocation();
        console.log("X coordinate is -  " + location.x);
        console.log("Y coordinate is -  " + location.y);
    };

    this.getButtonColor  = async function(){
       let buttoncolor = await colorButton.getCssValue("background-color");
       console.log("Button color is = " + buttoncolor);
       expect(buttoncolor).toBe('rgba(0, 209, 178, 1)');
    };

    this.getButtonDimensions = async function(){
        let dimnesions = await dimensionButton.getSize();
        console.log("Button Height is = " + dimnesions.height);
        console.log("Button Width is = " + dimnesions.width);
    };

    this. buttonDisable = async function(){
       let buttonStatus = await disableButton.isEnabled();
       expect(buttonStatus).toBe(false);
    };

    this.clickGoToHomeButton = async function(){
        gotoHomeButton.click();
        let currentUrl = await browser.getCurrentUrl();
        expect(currentUrl).toEqual("https://letcode.in/")
    };


};

module.exports = new buttonPage();