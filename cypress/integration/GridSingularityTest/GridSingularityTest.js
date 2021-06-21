import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginObjects from '../GridSingularityTest/pages/loginPage';
import homeObjects from '../GridSingularityTest/pages/homePage';
import projectObjects from '../GridSingularityTest/pages/projectsPage';
import simulationObjects from './pages/simulationPage';

const loginPage = new loginObjects();
const homePage = new homeObjects();
const projectsPage = new projectObjects();
const simulationPage = new simulationObjects();
Given('User navigates to d3a website', () => {
   cy.visit('https://www.d3a.io/');
})

When('User clicks on login button', () => {
    loginPage.getLoginButton().click();
})

Then('User lands on the login page of d3a.io', () => {
    cy.title().should('eq', 'D3A');
})

When('User enters username as {string} and password as {string}', (username, password) => {
    loginPage.getEmail().type(username);
    loginPage.getPassword().type(password);
})

And('User clicks on login button after entering username and password', () => {
    loginPage.getLoginButtonAfterEnteringUserNameAndPassword().click();
})

Then('User is able to successfully login to the Website', () => {
    homePage.getHomePageHeader().should('be.visible', {timeout: 10000});
    homePage.getHomePageHeader().should('have.text', homePage.getHomePageHeaderText());
})

Then('User is able to Unsuccessfully login to the Website', () => {
    loginPage.getLogginErrorMessage().should('have.text', loginPage.loginErrorMessage());
})

When('User clicks on Projects button', () => {
    homePage.getProjectButton().click();
})

And('User clicks on create New Project Button', () => {
    projectsPage.getCreateNewProjectButton().click();
})

Then('Project Creation pop up should be displayed', () => {
    projectsPage.getProjectCreationPopUp().should('have.text', projectsPage.getProjectCreationPopUpHeader());
})

When('User enters projectName as {string} and projectDescripton as {string}', (projectName, projectDescripton) => {
   projectsPage.getProjectName().type(projectName);
   projectsPage.getProjectDescription().type(projectDescripton);
})

And('Click on Add project button', () => {
    projectsPage.getAddProjectButton().click();
})

Then('Project should be created successfully as {string}', (projectName) => {
    projectsPage.getCreatedProjectName().should('have.text', projectName), {timeout: 10000};
})

When('User checks New Simulation button is enabled after project creation {string}', (projectName) => {
    projectsPage.getCreatedProjectName().should('have.text', projectName), {timeout: 10000};
    projectsPage.getCreatedProjectName().click();
    projectsPage.getSimulationButton().click();
    simulationPage.getSimulationPageHeader().should('have.text', simulationPage.getSimulationPageHeaderValue())
 })
 
 And('Enter the simulation name as {string}', (simulationName) => {
     simulationPage.getSimulationName().clear();
     simulationPage.getSimulationName().type(simulationName);
     simulationPage.getSimulationNextButton().click();
 })
 
 Then('Simulation should gets created and navigated to Modelling tab', () => {
    simulationPage.getSimulationPageHeader().should('have.text', "Modelling")
 })
 Then('Project should gets deleted', () => {
    projectsPage.getSettingbuttonForProject().click();
    projectsPage.getDeleteButton().click();
    projectsPage.getImsureButton().click();

 })


 



