const { browser } = require('protractor');
let actionMultiSelectPage = require('../pom/actionsMultiSelectPage')

describe('Actions - Multi Select _Hold and click Scenarios', function(){

    beforeEach(function(){
        actionMultiSelectPage.getUrl("https://play.letcode.in/aui");
    });

    it('hold and click test', function(){
        actionMultiSelectPage.holdAndClickMultiSelect();
        
    });
});