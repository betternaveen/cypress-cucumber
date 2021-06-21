class homePage{
getHomePageHeader(){
    return cy.get('h1');
}
getHomePageHeaderText(){
    return "Home";
}
getProjectButton(){
    return cy.get('button div svg.icon-projects');
}
navigateToProjectPage(){
    getProjectButton().click();
}
}
export default homePage;