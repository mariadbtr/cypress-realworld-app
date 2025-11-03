class PersonalHistory {
    selectorsList(){
        const selectors = {
            mineField: "[href='/personal']",
            emptyHistory: "[data-test='empty-list-header']"
        }
        return selectors
    }
    viewHistory(){
        cy.get(this.selectorsList().mineField).click()
    }
    emptyHistory(){
        cy.get(this.selectorsList().emptyHistory)
    }
}
export default PersonalHistory