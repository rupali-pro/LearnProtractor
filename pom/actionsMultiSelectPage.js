const { element, browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");

let actionMultiSelectPage = function(){


    let Sachin = element(by.xpath("//li[contains(text(), 'Sachin')]"));
    let Shewag = element(by.xpath("//li[contains(text(), 'Shewag')]"));
    let Ganguli = element(by.xpath("//li[contains(text(), 'Ganguly')]"));
    let Gambir = element(by.xpath("//li[contains(text(), 'Gambir')]"));


    this.getUrl =  function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
   };

   this.holdAndClickMultiSelect =  function(){
         browser.actions()
        .sendKeys(protractor.Key.CONTROL)
        .click(Sachin)
        .click(Shewag)
        .click(Ganguli)
        .click(Gambir)
        .perform();

   };



};
module.exports = new actionMultiSelectPage();