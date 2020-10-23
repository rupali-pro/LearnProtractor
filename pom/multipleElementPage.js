const { ConsoleReporter } = require("jasmine");
const { browser, element } = require("protractor");
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let XMLHttpRequest = require('xhr2');


let multipleElementPage = function(){


let links = element.all(by.tagName("a"));
let links1 = element.all(by.tagName("img"));




this.geturl = async function(url){
    await browser.waitForAngularEnabled(false);
    browser.get(url);
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();
};


this.findAvailableLinks = async function(){
    await browser.waitForAngularEnabled(false);
    let linklist = await links.count();
    console.log("No.of available links on page are = " + linklist);
    links.each(async function(element, index){
        let linktext = await element.getText();
        console.log(linktext);
    });
    
};

this.findBrokenLinks = async function(){
    await browser.waitForAngularEnabled(false);
    let linklist = await links.count();
    console.log("No.of available links on page are = " + linklist);
    
    for (let i = 0; i < linklist; i++) {
        // HttpURLConnection connection = (HttpURLConnection) new URL(links.get(i).getAttribute("href"))
        //.openConnection();
        // connection.connect(); 
        let xhttp = new XMLHttpRequest()
        xhttp.open(links.get(i).getAttribute("href"));
        let code = await xhttp.status();
        let message = await xhttp.statusText();
        xhttp.end();
        ConsoleReporter.log(links.get(i).getAttribute("href") + "===>" + code + message);
    };
};

};

module.exports = new multipleElementPage();