let buttonPage = require('../pom/buttonPage')

describe('Button Page Test Scenarios', function(){

    beforeEach(function(){
        buttonPage.getUrl("https://letcode.in/buttons");
    });

    it('Get Button Text Test', function(){
        buttonPage.getButtonText();
    });

    it('Get Button Background Color Test', function(){
        buttonPage.getButtonColor();
    });

    it('Get Button Field  Dimensions Test', function(){
        buttonPage.getButtonDimensions();

    });

    it('Get Button Location Test', function(){
        buttonPage.getButtonPosition();
    });

    it (' Click Button functionality Test', function(){
        buttonPage.clickGoToHomeButton();
    });

    it('Disabled Button Test', function(){
        buttonPage.buttonDisable();
    });

});