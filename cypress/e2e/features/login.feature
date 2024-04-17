Feature: Orange Main Page
 
    I want to open a search engine
 
 
    Scenario: Opening a search Orange page
        Given I open Orange Page
        When I write "Admin" and "admin123"
        Then I click in the button
 
    Scenario: Opening a search Orange page incorrect
        Given I open Orange Page
        When I write "Gonzalito" and "admin123"