const { browser, element } = require("protractor");

let framePage = function(){

let userName = element(by.xpath("//input[@placeholder='Enter name']"));
let emailField = element(by.xpath("//input[@placeholder = 'Enter email']"));
let submitButton = element(by.buttonText("Submit"));
let Frametitle = element (by.tagName("h1"));
let frameElement = element(by.xpath("//iframe[@src='frameUI']"));

this. getUrl = function(url){
    browser.get(url);
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();
};

this.frameByIndex = async function(index){
    await browser.switchTo().frame(index);
};

this.frameById = async function(id){
    await browser.switchTo().frame(id);
};

this.frameByName = async function(name){
    await browser.switchTo().frame(name);
};

this.frameBywebElement = async function(){
   await browser.switchTo().frame(frameElement.getWebElement());
};

this.returnMainPage = async function(){
    await browser.switchTo().defaultContent();
};

this.enterUserName = function(username){
    userName.sendKeys(username);
};

this.enterEmail = function(email){
    emailField.sendKeys(email);
};


};
module.exports = new framePage();