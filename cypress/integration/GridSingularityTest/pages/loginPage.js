class loginPage{

    getLoginButton(){
        return  cy.get('a[href="/login"] button');
    }
    getEmail(){
        return cy.get('#email');
    }
    getPassword(){
        return cy.get('#password');
    }
  
    getLoginButtonAfterEnteringUserNameAndPassword(){
        return cy.get('form').contains('Login');
    }
    getLogginErrorMessage(){
        return cy.get('span.GraphQLErrorDisplay__error-msg');
    }
    loginErrorMessage(){
        return 'Please, enter valid credentials';
    }

}
export default loginPage;