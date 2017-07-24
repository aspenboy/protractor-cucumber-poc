let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        'test/features/*.feature'
    ],

    resultJsonOutputFile: "./reports/json/protractor_report.json",
    
    cucumberOpts: {
        require: ['test/features/step_definitions/*.steps.js',
            'test/features/support/handlers.js'],
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        global.expect = chai.expect;
    }

};