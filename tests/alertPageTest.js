const { browser } = require('protractor');
let alertPage = require ('../pom/alertPage')

describe('alertpage test scenarios', function(){

    beforeEach(function(){
        alertPage.getUrl("https://letcode.in/alert");
    });

    it('acceptalert method test', function(){
        alertPage.clickSimpleAlert();
        browser.switchTo().alert().accept();
    });

    xit('get alert text test', function(){
        alertPage.clickConfirmAlert();
        console.log (browser.switchTo().alert().getText());
        
    });

    it('dismiss alert method test', function(){
        alertPage.clickConfirmAlert();
        browser.switchTo().alert().dismiss();
    });

    it('send alert Text and accept alert test', function(){
        alertPage.clickPromptAlert();
        alertPage.sendAlertText();
        
    });

    it('get web alert text test', function(){
        alertPage.clickModernAlert();
        alertPage.getWebAlertText();
        
    });

});