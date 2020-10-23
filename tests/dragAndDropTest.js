const { browser, ExpectedConditions } = require('protractor');
let dragAndDropPage = require('../pom/dragAndDropPage')

describe('drag and drop functionality test', function(){

    beforeEach(function(){

        dragAndDropPage.geturl("https://play.letcode.in/aui");
    });

    it('drag and drop element Test', function(){

        dragAndDropPage.dragAndDrop();
        
    });
});
