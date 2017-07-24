var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ registerHandler }) {
    registerHandler('BeforeScenario', function (features, callback) {
        browser.get('http://localhost:8080/wicket-examples/');
        callback();
    });
});