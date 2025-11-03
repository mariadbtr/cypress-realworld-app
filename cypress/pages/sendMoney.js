class SendMoney{
    selectorsList(){
        const selectors = {
            newTransactionButtom: "[data-test='nav-top-new-transaction']",
            contactUser: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            payButtom: "[data-test='transaction-create-submit-payment']",
            sucessTransation: ".MuiAlert-colorSuccess"
        }
        return selectors
    }
    newTransaction(amount, note){
        cy.get(this.selectorsList().newTransactionButtom).click()
        cy.get(this.selectorsList().contactUser).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButtom).click()
    }
    sucessTransation(){
        cy.get(this.selectorsList().sucessTransation)
    }
    
}
export default SendMoney