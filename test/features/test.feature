Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests against Wicket web page

    Scenario: protractor, cucumber and wicket test
        Given I'm on a library's login page
        When I enter valid credentials
        Then I will have access to the library