const { element, browser } = require("protractor");

let dropdownPage = function(){


    let fruits = element(by.id("fruits"));



this.geturl = function(url){
    browser.get(url);
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();

};



this.selectFruit = function(fruitname){
    element(by.cssContainingText('option', fruitname)).click();

};

this.selectSuperhero = async function(superhero){

    // let herolist = element.all(by.id("superheros"));
    // await herolist.map(function(list){
    //     return list;
    // }).then(async function(list){
    //     for (let i = 0; i < list.length; i++) {
    //         let text = list[i].$$('options').getText();
    //         console.log(await text);
    //         if (text === superhero ) {
    //             list[i].click();
    //         };
            
    //     };
    // });

    element(by.cssContainingText('option', superhero)).click();
    
};

};
module.exports = new dropdownPage();