# cypress-cucumber

Steps to execute the test suite
1. Clone this repository
2. Run NPM install (node is prerequisite)
3. Execute command called. "npx cypress run"

Some details about the automation framework.
1. Used page object pattern
2. Used BDD concepts using cucmber and Gerkin language.
3. GridSingularityTest.feature is the feature file where english like tests are written.
4. Execution video can also be found in this repo

Feature file:

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

Scenario Outline: Login as existing user and create project and a pwdsimulation associated with the project
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




**
Console output of the suite execution:**

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.5.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      1 found (GridSingularityTest.feature)                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  GridSingularityTest.feature                                                     (1 of 1)


  Test d3a.io basic functionality
    ✓ Login as existing user into d3a.io website (example #1) (5280ms)
    ✓ Login with Non existing user into d3a.io website (example #1) (3833ms)
    ✓ Login as existing user and verify the create project functionality (example #1) (4494ms)
    ✓ Login as existing user and create project and a simulation associated with the project (example #1) (6043ms)


  4 passing (22s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     21 seconds                                                                       │
  │ Spec Ran:     GridSingularityTest.feature                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing:/cypress/videos/GridSingularityTest.feature.mp4     (3 seconds)
                                                                               


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  GridSingularityTest.feature              00:21        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:21        4        4        -        -        -  
