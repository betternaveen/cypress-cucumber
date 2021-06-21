Feature: Test d3a.io basic functionality
    I want to test the basic functionality of login create and simuate project

Scenario Outline: Login as existing user into d3a.io website
    Given User navigates to d3a website
    When User clicks on login button
    Then User lands on the login page of d3a.io
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button after entering username and password
    Then User is able to successfully login to the Website

Examples:
    | username                  | password    |
    | betternaveen@gmail.com    | Test@june22 |

Scenario Outline: Login with Non existing user into d3a.io website
    Given User navigates to d3a website
    When User clicks on login button
    Then User lands on the login page of d3a.io
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button after entering username and password
    Then User is able to Unsuccessfully login to the Website

Examples:
    | username                  | password    |
    | nonexistinguser@gmail.com    | wrongpassword |

Scenario Outline: Login as existing user and verify the create project functionality
    Given User navigates to d3a website
    When User clicks on login button
    Then User lands on the login page of d3a.io
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button after entering username and password
    Then User is able to successfully login to the Website
    When User clicks on Projects button
    And User clicks on create New Project Button
    Then Project Creation pop up should be displayed
    When User enters projectName as '<projectName>' and projectDescripton as '<projectDescripton>'
    And Click on Add project button
    Then Project should be created successfully as '<projectName>'  
    Then Project should gets deleted

Examples:
    | username                  | password    | projectName   | projectDescripton   |
    | betternaveen@gmail.com    | Test@june22 | sampleProject1 | sample description  |

Scenario Outline: Login as existing user and create project and a simulation associated with the project
    Given User navigates to d3a website
    When User clicks on login button
    Then User lands on the login page of d3a.io
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button after entering username and password
    Then User is able to successfully login to the Website
    When User clicks on Projects button
    And User clicks on create New Project Button
    Then Project Creation pop up should be displayed
    When User enters projectName as '<projectName>' and projectDescripton as '<projectDescripton>'
    And Click on Add project button
    Then Project should be created successfully as '<projectName>'  
    When User checks New Simulation button is enabled after project creation '<projectName>'
    And Enter the simulation name as '<simulationName>'
    Then Simulation should gets created and navigated to Modelling tab


Examples:
    | username                  | password    | projectName   | projectDescripton   |   simulationName  |
    | betternaveen@gmail.com    | Test@june22 | sampleProject2 | sample description  |   sampleSimulation|
