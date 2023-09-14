import* as elem from "../fixtures/object-repo.json"
export class StartActivity {
    startActivityWithoutWorklist() {
        cy.get(elem.Dashboard_startActivitybtn).click()
        cy.get(elem.StartActivity_SelectActivityDdl).click()
        cy.get(elem.StartActivity_ActivityWithoutWLOpt).click()
        cy.get(elem.StartActivity_SimulationChx).click()
        cy.get(elem.StartActivity_AutomateLoadingChx).click()
        cy.get(elem.StartActivity_AutomateUnloadingChx).click()
        cy.get(elem.StartActivity_StartBtn).click()
    }
    validateStartingActivity(expectedTxt) {
        cy.get(elem.StartActivity_loadingMsg).should('have.text', expectedTxt)
    }
    validateCompletedActivity(expectedTxt) {
        cy.get(elem.StartActivity_toastMsg, { timeout: 500000 }).should('have.text', expectedTxt)
    }
    startActivityWithWorklist() {
        cy.get(elem.Dashboard_startActivitybtn, { timeout: 10000 }).click()
        cy.get(elem.StartActivity_SelectActivityDdl).click()
        cy.get(elem.StartActivity_ActivityWithWLOpt).click()
        cy.get(elem.StartActivity_SelectWorklistDdl).click()
        cy.get(elem.StartActivity_WorklistOpt).click()
        cy.get(elem.StartActivity_SimulationChx).click()
        cy.get(elem.StartActivity_AutomateLoadingChx).click()
        cy.get(elem.StartActivity_AutomateUnloadingChx).click()
        cy.get(elem.StartActivity_StartBtn).click()
    }
}