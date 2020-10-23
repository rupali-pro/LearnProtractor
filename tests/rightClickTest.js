const { browser } = require('protractor');
let rightClickPage = require('../pom/rightClickPage')

describe('Right click Functionality Test', function(){

    beforeEach(function(){
        rightClickPage.getUrl("https://play.letcode.in/contextmenu");
    });

    it('Right Click Test', function(){

        rightClickPage.performRightClick();
        rightClickPage.clickOnClickMe();
        rightClickPage.getAlertTextandAccept();
    });

   
});