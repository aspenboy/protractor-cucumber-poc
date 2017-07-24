var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    var usernameInput = element(by.id("id1")).$("dl > dd > input[name=\"username\"]");
    var passwordInput = element(by.id("id1")).$("dl > dd > input[name=\"password\"]");
    var submitButton = element(by.id("id1")).$("dl > dd > input[name=\"submit\"]");
    var signOutButton = element(by.xpath("//body//p//a[2]"));
    var errorMessage = element(by.css(".feedbackPanel > .feedbackPanelERROR"));

    Given("I'm on a library's login page", function () {
        browser.get("http://localhost:8080/wicket-examples/library");
    });

    When('I enter valid credentials', function () {
        usernameInput.sendKeys("wicket");
        passwordInput.sendKeys("wicket");
        return submitButton.click();
    });

    When('I enter \'{username}\' as a username', function (username) {
        return usernameInput.sendKeys(username);
    });

    When('I enter \'{password}\' as a password', function (password) {
        return passwordInput.sendKeys(password);
    });

    When(`I click "submit" button`, function () {
        return submitButton.click();
    });

    // Not used for now
    // When('I enter incorrect combination of credentials', function(table) {
    //     element(by.id("id1")).$("dl > dd > input[name=\"username\"]").sendKeys(table.rows()[0]);
    //     return element(by.id("id1")).$("dl > dd > input[name=\"password\"]").sendKeys(table.rows()[1]);
    // });

    Then('I will have access to the library', function () {
        expect(signOutButton.isDisplayed()).to.be.eventually.true;
        return signOutButton.click();
    });

    Then('I will see an error message', function () {
        return expect(errorMessage.getText()).to.eventually.equal("Sign in failed");
    });
});