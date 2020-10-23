const { browser } = require('protractor');
let dragAndDropPage = require('../pom/dragAndDropPage')

describe('drag and drop by location test scenario', function(){

    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        dragAndDropPage.geturl("https://jqueryui.com/draggable/");
    });

    it('drag and drop by location test', function(){
        dragAndDropPage.dragAndDropByLocation();
    });

    
});