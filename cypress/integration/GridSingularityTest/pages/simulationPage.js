class simulationPage{

    getSimulationName(){
        return  cy.get('input[placeholder="configuration name"]');
    }
    getSimulationNextButton(){
        return cy.get('button[class="button button--accent button-icon settings-form__submit"]')
    }
    getSimulationPageHeader(){
        return cy.get('h1.headline.header__page-title.headline-london');
    }
    getSimulationPageHeaderValue(){
        return "New Simulation";
    }

}
export default simulationPage;