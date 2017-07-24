var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    Given("I'm on a library's login page", function () {
        browser.get("http://localhost:8080/wicket-examples/library");
    });

    When('I enter valid credentials', function () {
        element(by.id("id1")).$("dl > dd > input[name=\"username\"]").sendKeys("wicket");
        element(by.id("id1")).$("dl > dd > input[name=\"password\"]").sendKeys("wicket");
        return element(by.id("id1")).$("dl > dd > input[name=\"submit\"]").click();
    });

    When('I enter \'{username}\' as a username', function (username) {
        return element(by.id("id1")).$("dl > dd > input[name=\"username\"]").sendKeys(username);
    });

    When('I enter \'{password}\' as a password', function (password) {
        return element(by.id("id1")).$("dl > dd > input[name=\"password\"]").sendKeys(password);
    });

    When(`I click "submit" button`, function () {
        return element(by.id("id1")).$("dl > dd > input[name=\"submit\"]").click();
    });

    When('I enter incorrect combination of credentials', function(table) {
        element(by.id("id1")).$("dl > dd > input[name=\"username\"]").sendKeys(table.rows()[0]);
        return element(by.id("id1")).$("dl > dd > input[name=\"password\"]").sendKeys(table.rows()[1]);
    });

    Then('I will have access to the library', function () {
        let signOut = element(by.xpath("//body//p//a[2]"));
        expect(signOut.isDisplayed()).to.be.eventually.true;
        return signOut.click();
    });

    Then('I will see an error message', function () {
        let msg = element(by.css(".feedbackPanel > .feedbackPanelERROR"));
        return expect(msg.getText()).to.eventually.equal("Sign in failed");
    });
});