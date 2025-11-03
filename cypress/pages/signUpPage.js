class SignUpPage{
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signUpButtom: "[type='submit']",
            alertAcessInvalid: "[aria-invalid='true']"
        }
        return selectors
    }
    acessSignUpPage(){
        cy.visit('http://localhost:3000/signup')
    }
    signUpPage(firstName, lastName, userName, password, confirmPassword){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().userNameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }
    signUpButtom(){
        cy.get(this.selectorsList().signUpButtom)
    }
    acessInvalid(){
        cy.get(this.selectorsList().alertAcessInvalid)
    }
}
export default SignUpPage