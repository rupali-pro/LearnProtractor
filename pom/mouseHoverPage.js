const { element, browser } = require("protractor")

let mouseHoverPage = function(){


    let closePopupButton = element(by.xpath("//button[contains(text(), '✕')]"));
    let electronics = element(by.xpath("//span[.='Electronics']"));
    let googleNextLink = element(by.xpath("//a[contains(text(), 'Google Nest')]"));
    let electronicLinks = element.all(by.xpath("//div[@class='_1SfNly']/div/a"));


    this.getUrl =  function(url){
         browser.get(url);
         browser.manage().window().maximize();
         browser.manage().deleteAllCookies();
    };

    this.mouseHoverOnElectronicsAndClick =  function(){
         browser.actions().mouseMove(electronics).click().perform();
        
    };

    this.closeLoginPopup = async function(){
        await closePopupButton.click();
    
    };

    this.clickGoogleNextLink = function(){
        googleNextLink.click();

    };

    this.mouseHoverAndClickLink = async function(option){

        let count = await electronicLinks.count();
        console.log("No.of links available under Electronic Tag ==> " + count);
        for (let i = 0; i < count; i++) {
           let linkText = await electronicLinks.get(i).getAttribute("title");
           console.log(await("Links availabe under Electronic tags are ===> " + linkText));
           if (linkText == option) {
               electronicLinks.get(i).click();
               
           };
            
        };
    };





};

module.exports = new mouseHoverPage();