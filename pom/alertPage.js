const { browser } = require("protractor");

let alertPage = function(){


    let simpleAlert = element(by.buttonText("Simple Alert"));
    let confirmAlert = element(by.css("#confirm"));
    let promptAlert = element(by.xpath("//button[@id='prompt']"));
    let modernAlert= element(by.css(".button is-fullwidth is-success"));
    let modernAlertText = element(by.css('class','title'));


    this.getUrl = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
    }


    this. clickSimpleAlert = async function(){
        await simpleAlert.click();
    };

    this. clickConfirmAlert = async function(){
        await confirmAlert.click();
    };

    this. clickPromptAlert = async function(){
        await promptAlert.click();
    };

    this. clickModernAlert = async function(){
        await modernAlert.click();
    };

    this. getWebAlertText = async function(){
        let text = await modernAlertText.getText();
        expect(text).toEqual("Modern Alert - Some people address me as sweet alert as well ");
    };

    this.sendAlertText = async function(){
        let alert = await browser.switchTo().alert();
        browser.sleep(2000);
        alert.sendKeys("text");
        alert.accept();
    };

};

module.exports = new alertPage();