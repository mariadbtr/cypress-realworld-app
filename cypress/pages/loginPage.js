class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']", 
            passwordField: "[name='password']",
            singInButton: "[type='submit']",
            wrongCredentials: "[role='alert']"
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }

    loginWithAnyUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().singInButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentials)
    }
}
export default LoginPage