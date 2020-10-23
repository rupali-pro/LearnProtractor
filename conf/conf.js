
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  captureOnlyFailedSpecs: true
});
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
        
    },
    framework: 'jasmine',
    specs:['../tests/amazonSearchTest.js'],
    //SELENIUM_PROMISE_MANAGER : false,

    // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
        },
    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter({
            specDone: (result) => {
              if(result.failedExpectations.length > 0) {
                browser.takeScreenshot().then((screenShot) => {
                  fs.writeFile('./protractorFailure.png', screenShot, 'base64', (err) => {
                    if (err) throw err;
                  });
                });
              }
            }
          });
        
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        },

      // Close the report after all tests finish
        afterLaunch: function(exitCode) {
     return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });

}
        

}






//add below capability to config file for headless execution along wth browserName
       // 'chromeOptions':{
           // args:['--headless', '--window-size=1920x1280' ]
       // }

//add below mentioned capability to config file for parallel execution along with browserName
// shardTestFiles : true,
// maxInstances : 2

// Make following changes to config file for paraller execution in multiple browsers
//instead of capabilities we have to add multiCapabilities as follows:
// multiCapabilities :[
// {
//     'browserName' : 'chrome'
// },
// {
//     'browserName' : 'firefox'
// }

// ]

//************************************************************************************************* */
// For Jasmine spec report we have to add following things into config file so that we will get good 
//console logs
//@first we have to instal jasmine spec Reporter (Command: npm install jasmine-spec-reporter)
// IMPORT STATEMENT: let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// exports.config = {
//    // your config here ...

//   onPrepare: function () {
//     jasmine.getEnv().addReporter(new SpecReporter({
//       spec: {
//         displayStacktrace: true
//       }
//     }));
//   }
// }

// OR****************** To get very good console logs use following customized onPrepare  template
// onPrepare: function () {
//     jasmine.getEnv().addReporter(
//         new SpecReporter({
//             suite: {
//                 displayNumber: true // display each suite number (hierarchical)
//             },
//             spec: {
//                 displayPending: false, // display each pending spec
//                 displayDuration: true // display each spec duration
//             },
//             summary: {
//                 displaySuccesses: true, // display summary of all successes after execution
//                 displayFailed: true, // display summary of all failures after execution
//                 displayPending: true // display summary of all pending specs after execution
//             }
//         })
//     );
//************************************************************************************************** */
//For Jasmine Allure Report with screenshot on failure add following template in config file
// var AllureReporter = require('jasmine-allure-reporter');
//         jasmine.getEnv().addReporter(new AllureReporter());
//         jasmine.getEnv().afterEach(function (done) {
//             browser.takeScreenshot().then(function (png) {
//                 allure.createAttachment('Screenshot', function () {
//                     return new Buffer(png, 'base64')
//                 }, 'image/png')();
//                 done();
//             })
//         });
//         jasmine.getEnv().beforeEach(function (done) {
//             browser.takeScreenshot().then(function (png) {
//                 allure.createAttachment('Screenshot', function () {
//                     return new Buffer(png, 'base64')
//                 }, 'image/png')();
//                 done();
//             })
//         });

//     }
// }
