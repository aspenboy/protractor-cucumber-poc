Feature: Running Cucumber with Protractor
As a user of Protractor
I should be able to use Cucumber
In order to run my E2E tests against Wicket web page


    Scenario: Login with correct credentials
        Given I'm on a library's login page
        When I enter valid credentials
        Then I will have access to the library

    Scenario: Login with incorrect credentials
        Given I'm on a library's login page
        When I enter 'wicket' as a username
        And I enter 'test' as a password
        And I click "submit" button
        Then I will see an error message

    Scenario Outline: login with many different incorrect credentials
        Given I'm on a library's login page
        When I enter '<username>' as a username
        And I enter '<password>' as a password
        And I click "submit" button
        Then I will see an error message

        Examples:
            | username | password |
            | wicket   | Value 2  |
            | test     | wicket   |
            | test     | test     |
