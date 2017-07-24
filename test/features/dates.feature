Feature: Using Protractor + Cucumber on Wicket's date picker

As a user of Protractor and Cucumber
I should be able to select a date using Wicket's date picker control

    @wip
    Scenario: select a date with date picker
        Given I'm on a 'dates' page
        When I click on the calendar icon
        And choose a date
        And click 'submit' to confirm the date
        Then I should see the message in the info panel
    
    Scenario: select a date with date picker - this scenario will fail on purpose
        Given I'm on a 'dates' page
        When I click on the calendar icon
        And choose a date
        And click 'submit' to confirm the date
        Then I will look for incorrect date just to fail the scenario on purpose
