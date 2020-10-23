const { browser, element } = require('protractor')
let mouseHoverPage = require('../pom/mouseHoverPage')

describe('mousehoverpage test scenarios',function(){

    let result = element(by.tagName("h1"));

    beforeEach(function(){
         browser.waitForAngularEnabled(false);
         mouseHoverPage.getUrl("https://www.flipkart.com/");
         
    });

    it('Landing Page Title test ', async function(){
        mouseHoverPage.closeLoginPopup();
        let title =  await browser.getTitle();
        expect(title).toEqual("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

    });

    it('MouseHover on Electronics and Click on Google Nest link test', function(){
        mouseHoverPage.mouseHoverOnElectronicsAndClick();
        browser.sleep(2000);
        mouseHoverPage.mouseHoverAndClickLink("Google Nest");
        browser.sleep(20000);
        expect(result.getText()).toEqual("Google Nest Mini Chalk");

    })



});