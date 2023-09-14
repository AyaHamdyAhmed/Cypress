///<reference types="cypress" />
import {
    navigate,
    loginWithValidUsernameAndPassword,
    validateLoginSuccessfully
} from "../page-objects/login-page";
import { StartActivity } from "../page-objects/startActivity-page";
import* as testData from "../fixtures/SERVO-credentials.json"
describe('start Activity', () => {
    const startActivity = new StartActivity()
    beforeEach(() => {
        navigate()
        loginWithValidUsernameAndPassword(testData.username, testData.password)
    })
    it('should be able to start activity without worklist', () => {
        validateLoginSuccessfully(' Dashboard ')
        startActivity.startActivityWithoutWorklist()
        startActivity.validateStartingActivity(' Scheduling, your workflow will start soon...')
        startActivity.validateCompletedActivity('Workflow Completed Successfully on Test')
    })
    it('should be able to start activity with worklist', () => {
        startActivity.startActivityWithWorklist()
        startActivity.validateStartingActivity(' Scheduling, your workflow will start soon...')
        startActivity.validateCompletedActivity('Workflow Completed Successfully on Test')
    })

})
