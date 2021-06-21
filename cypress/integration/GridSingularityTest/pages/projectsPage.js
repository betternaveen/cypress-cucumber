class projectsPage{

    getCreateNewProjectButton(){
        return  cy.get('span.button__label').contains('new project');
    }

    getProjectCreationPopUp(){
        return cy.get('h3.library-name-modal__header');
    }
    getProjectCreationPopUpHeader(){
        return "New Project";
    }

    getAddProjectButton(){
        return  cy.get('span.button__label').contains('Add');
    }

    clickOnNewProjectButton(){
        this.getNewProjectButton().click();
    }
    getProjectName(){
        return cy.get('input#input-field-name');
    }
    getProjectDescription(){
        return cy.get('textarea#textarea-field-nameTextArea');
    }
    getCreatedProjectName(){
        cy.get('div.saved-project__headline span span')
  .should('have.length', 5)
        return cy.get('div.saved-project__headline span span').first();
    }

    getSimulationButton(){
        return cy.get('button.button.button--accent.button-icon.saved-project__button--new-simulation');
    }

    getSettingbuttonForProject(){
        return cy.get('button.button.button--light-blue.button-icon.button--icon-only').first();
    }
    getDeleteButton(){
        return cy.get('p').contains('Delete');
    }
    getImsureButton(){
        return cy.get('span.button__label').contains('I\'m sure');
    }

}
export default projectsPage;