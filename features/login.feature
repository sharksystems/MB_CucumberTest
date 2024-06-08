Feature: User Login

  Scenario: User Login with empty fields
    Given User is located on the login page of the saucedemo website
    When User clicks on the "Login" Button
    Then User should see the "Epic sadface: Username is required" error message