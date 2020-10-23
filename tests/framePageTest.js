let framePage = require ('../pom/framePage')

describe ('handle frames with differnt ways', function(){

    let Frametitle = element (by.tagName("h1"));

    beforeEach(function(){
        framePage.getUrl("https://letcode.in/frame");

    });

    it('handle frame with index', function(){
        framePage.frameByIndex(0);
        framePage.enterUserName("admin");
        framePage.enterEmail("abc@test.com");

    });

    xit('handle frame with ID', function(){
        framePage.frameById("")
        framePage.enterUserName("admin");
        framePage.enterEmail("abc@test.com");

    });

    xit('handle frame with Name', function(){
        framePage.frameByName("")
        framePage.enterUserName("admin");
        framePage.enterEmail("abc@test.com");

    });

    it('handle frame with webelement', function(){
        framePage.frameBywebElement();
        framePage.enterUserName("admin");
        framePage.enterEmail("abc@test.com");

    });

    it('switch to default content', function(){
        framePage.frameByIndex(0);
        framePage.enterUserName("admin");
        framePage.enterEmail("abc@test.com");
        framePage.returnMainPage();
        expect(Frametitle.getText()).toEqual("Frames");

    });

    



});