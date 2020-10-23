const { enterFullName } = require('../pom/editPage');
let editPage = require('../pom/editPage')

describe('editPageTests', function(){

    beforeEach( function(){
        editPage.getUrl("https://letcode.in/edit");
    })

    it('Input Field Test',  function(){
         editPage.enterFullName('Test Test');
       
    });

    it('append text test',  function(){
         editPage.appendTextWithTab('writer');
    })

    it( 'clear text test',  function(){
        editPage.clearText();

    });

    it('value of inside box', function(){
       editPage.getValueofInsideBox();
    });

    it('disabled field test', function(){
         editPage.confirmDisableField();
    });



});