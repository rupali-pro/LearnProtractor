
let dropdownPage = require('../pom/dropdownPage')

describe('dropdownpage test scenarios', function(){

    

    beforeEach(function(){
        dropdownPage.geturl("https://letcode.in/dropdowns");
    });

    it('select fruit test', function(){
        dropdownPage.selectFruit("Banana");
        let notification = element(by.tagName("p"));
        expect(notification.getText()).toEqual("You have selected Banana");
        dropdownPage.selectFruit("Orange");
        let notification1 = element(by.tagName("p"));
        expect(notification1.getText()).toEqual("You have selected Orange");
        dropdownPage.selectFruit("Mango");
        let notification2 = element(by.tagName("p"));
        expect(notification2.getText()).toEqual("You have selected Mango");

    });

    it('select superhero test1', function(){
        dropdownPage.selectSuperhero("Batman");
        let selectMssg = element(by.tagName("p"));
        expect(selectMssg.getText()).toEqual("You have selected Batman");
        
    });

    it('select superhero test2', function(){
        dropdownPage.selectSuperhero("Wonder Woman");
        let selectMssg1 = element(by.tagName("p"));
        expect(selectMssg1.getText()).toEqual("You have selected Wonder Woman");
        
    });

    it('select superhero test3', function(){
        dropdownPage.selectSuperhero("The Shadow");
        let selectMssg2 = element(by.tagName("p"));
        expect(selectMssg2.getText()).toEqual("You have selected The Shadow");
        
    });

    it('select superhero test4', function(){
        dropdownPage.selectSuperhero("Guardians of the Galaxy");
        let selectMssg3 = element(by.tagName("p"));
        expect(selectMssg3.getText()).toEqual("You have selected Guardians of the Galaxy");
       
    });

    it('select superhero test5', function(){
        dropdownPage.selectSuperhero("Daredevil");
        let selectMssg4 = element(by.tagName("p"));
        expect(selectMssg4.getText()).toEqual("You have selected Daredevil");
    });

});