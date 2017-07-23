var reporters = require('jasmine-reporters');

// An example configuration file.
exports.config = {
 
  // Capabilities to be passed to the webdriver instance.

  multiCapabilities:[{
    'browserName': 'chrome'
	
  }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: ['test_spec.js'],
  specs: ['./example_spec.js'],
  //creating custom global object
  onPrepare: function(){
    global.drv = 'testBrowser';
    //***************jasmine-reporters**************
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './reports',
        filePrefix: 'xmloutput'
    }));

    // returning the promise makes protractor wait for the reporter config before executing tests 
    return global.browser.getProcessedConfig().then(function (config) {

    });
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //HTMLReport called once tests are finished 
  onComplete: function() {
     var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();
 
     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
 
        var HTMLReport = require('protractor-html-reporter');
 
        testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: './reports',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true
        };
        new HTMLReport().from('./reports/xmloutput.xml', testConfig);
      });
    },

  plugins: [{
    package: 'jasmine2-protractor-utils',
    disableHTMLReport: true,
    disableScreenshot: false,
    screenshotPath:'./reports/screenshots',
    screenshotOnExpectFailure:false,
    screenshotOnSpecFailure:true,
    clearFoldersBeforeTest: true,
    htmlReportDir:  './reports/htmlReports',
  }],
};
