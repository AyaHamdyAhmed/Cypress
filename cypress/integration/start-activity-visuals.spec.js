///<reference types="cypress" />
import * as loginPage from '../page-objects/login-page'
import * as startActivity from '../page-objects/startActivity-page'
import * as testData from '../fixtures/SERVO-credentials.json'
describe('visual validation', () => {
    before(() => {
        loginPage.navigate()
        loginPage.loginWithValidUsernameAndPassword(testData.username,testData.password)
        loginPage.validateLoginSuccessfully(' Dashboard ')
    })
    

    beforeEach(() => cy.eyesOpen({
        appName: 'SERVO-test', batchName: 'start activity',
        browser: [
            { name: 'chrome', width: 1024, height: 768 },
            { name: 'chrome', width: 800, height: 600 },
            { name: 'firefox', width: 1024, height: 768 },
            { deviceName: 'ipad' },

        ]
    }))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('before starting activity')
        startActivity.startActivityWithoutWorklist()
        cy.eyesCheckWindow('after stating activity')
        startActivity.validateStartingActivity(' Scheduling, your workflow will start soon...')
        startActivity.validateCompletedActivity('Workflow Completed Successfully on Test')
        cy.eyesCheckWindow('activity completed')
    })
})