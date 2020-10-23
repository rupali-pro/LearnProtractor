const { element, browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");

let rightClickPage = function(){


let rightClickButton = $("app-context-menu button"); // same as  element(by.css("app-context-menu button"));
let clickMeButton = element(by.xpath("//button[@role='menuitem']"));


this.getUrl = function(url){
    browser.get(url);
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();
};

this.performRightClick = function(){

    browser.actions().click(rightClickButton, protractor.Button.RIGHT).perform();
};

this.clickOnClickMe = function(){
    clickMeButton.click();
};

this.getAlertTextandAccept = async function(){
    let alert = browser.switchTo().alert();
    let alertText = await alert.getText();
    console.log("Alert Text is ==> " + alertText);
    expect(alertText).toEqual("Context menu clicked");
    alert.accept();
};


};

module.exports = new rightClickPage();