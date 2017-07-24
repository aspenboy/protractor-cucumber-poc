require('chromedriver');
let seleniumWebdriver = require('selenium-webdriver');
let { defineSupportCode } = require('cucumber');

function CustomWorld({ attach, parameters }) {
    this.attach = attach
    this.parameters = parameters
}

defineSupportCode(function ({ setWorldConstructor }) {
    setWorldConstructor(CustomWorld);
});