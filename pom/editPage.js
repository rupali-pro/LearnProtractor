const { element, browser, Key } = require("protractor")

let editPage = function(){

    let fullNameField = element(by.id("fulName"));
    let appendField = element(by.id("append"));
    let insideBoxField = element(by.id("getme"));
    let clearTextField = element(by.id("my-name"));
    let disableField = element(by.id("canyouedit"));
    let readOnlyField = element(by.id("dontwrite"));


    this.getUrl = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.manage().deleteAllCookies();
    }


    this.enterFullName = function(name){
        fullNameField.sendKeys(name);
    };

    this. appendTextWithTab = async function(text){
        appendField.sendKeys(text)
        await appendField.sendKeys(Key.TAB);

    };

    this. clearText = function(){
        clearTextField.clear();
    }

    this. confirmDisableField = function(){
     let value =  disableField.isEnabled();
     expect(value).toBe(false);
    };

    this.getValueofInsideBox = function(){
        let boxValue = insideBoxField.getAttribute("value");
        //console.log(boxValue);
        expect(boxValue).toEqual("ortonikc");

    }


};

module.exports = new editPage();