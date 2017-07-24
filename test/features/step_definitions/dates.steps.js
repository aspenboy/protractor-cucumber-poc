let { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    let secondForm = element.all(by.css("form")).get(1);
    let feedbackInfo = element(by.css(".feedbackPanel > .feedbackPanelINFO"));

    Given('I\'m on a \'dates\' page', function () {
        return browser.get("http://localhost:8080/wicket-examples/dates");
    });

    When('I click on the calendar icon', function () {
        return element.all(by.css('.yui-skin-sam'))
            .first()
            .$('img')
            .click();
    });

    When('choose a date', function () {
        return element.all(by.css(".calcell.selectable"))
            .first()
            .click();
    });

    When('click \'submit\' to confirm the date', function () {
        return secondForm.$('input[type="submit"]').click();
    });

    Then('I should see the message in the info panel', function () {
        return expect(feedbackInfo.getText()).to.eventually.equal('set date to Sat Jul 01 00:00:00 CEST 2017');
    });
    
    Then('I will look for incorrect date just to fail the scenario on purpose', function () {
        return expect(feedbackInfo.getText()).to.eventually.equal('set date to Sat Jul 01 00:00:00 CEST 2015');
    });
});