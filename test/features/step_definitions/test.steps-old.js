var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    this.Given('I\'m on a library\'s login page', function (callback) {
        browser.get("http://localhost:8080/wicket-examples/library");
        callback();
    });

    this.When('I enter valid credentials', function (callback) {
        element(by.id("id1")).$("dl > dd > input[name=\"username\"]").sendKeys("wicket");
        element(by.id("id1")).$("dl > dd > input[name=\"password\"]").sendKeys("wicket");
        element(by.id("id1")).$("dl > dd > input[name=\"submit\"]").click();
        callback();
    });

    this.Then('I will have access to the library', function (callback) {
        let signOut = element(by.xpath("//body//p//a[2]"));
        expect(signOut.isDisplayed()).to.be.eventually.true;
        callback();
    });

};