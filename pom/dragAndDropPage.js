const { browser } = require("protractor");

let dragAndDropPage = function(){


    let source = element(by.id("draggable"));
    let target = element(by.id("droppable"));
    let src = element(by.css("#draggable"));




    this.geturl = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
    };

    this.dragAndDrop = async function(){
        await  browser.actions().dragAndDrop(await source.getWebElement(), await target.getWebElement()).perform();

    };

    this.dragAndDropByLocation = async function(){
       await  browser.switchTo().frame(0);
        let locationX =(await src.getLocation()).x;
        let locationY = (await src.getLocation()).y;
        await browser.actions().dragAndDrop(src, {
           x: locationX + 50,
           y: locationY + 50 
        }).perform();

    };
    
};

module.exports = new dragAndDropPage();



