let { defineSupportCode } = require('cucumber');
let reporter = require("cucumber-html-reporter");
let jsonReports = process.cwd() + "/reports/json";
let htmlReports = process.cwd() + "/reports/html";
let targetJson = jsonReports + "/cucumber_report.json";
let fs = require("fs");
let mkdirp = require("mkdirp");
let Cucumber = require("cucumber");

defineSupportCode(function ({ registerHandler, After, registerListener }) {

    registerHandler('BeforeScenario', function (features, callback) {
        browser.get('http://localhost:8080/wicket-examples/');
        callback();
    });

    After(function (scenario) {
        let attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            let decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });
    });

    let cucumberReporteroptions = {
        theme: "bootstrap",
        jsonFile: targetJson,
        output: htmlReports + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true
    };

    let logFn = string => {
        if (!fs.existsSync(jsonReports)) {
            mkdirp.sync(jsonReports);
        }
        try {
            fs.writeFileSync(targetJson, string);
            reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }
        }
    };

    let jsonformatter = new Cucumber.JsonFormatter({
        log: logFn
    });

    registerListener(jsonformatter);
});