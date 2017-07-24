let seleniumWebdriver = require('selenium-webdriver');
let { defineSupportCode } = require('cucumber');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    let usernameInput = element(by.css("dl > dd > input[name=\"username\"]"));
    let passwordInput = element(by.css("dl > dd > input[name=\"password\"]"));
    let submitButton = element(by.css("dl > dd > input[name=\"submit\"]"));
    let signOutButton = element(by.xpath("//body//p//a[2]"));
    let errorMessage = element(by.css(".feedbackPanel > .feedbackPanelERROR"));

    Given("I'm on a library's login page", function () {
        return browser.get("http://localhost:8080/wicket-examples/library");
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