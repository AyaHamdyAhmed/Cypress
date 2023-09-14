///<reference types="cypress" />
import {
    navigate,
    loginWithValidUsernameAndPassword,
    validateLoginSuccessfully
} from "../page-objects/login-page";
import { ScheduleActivity } from "../page-objects/scheduleActivity-page";
import * as testData from "../fixtures/SERVO-credentials.json"
describe('schedule Activity', () => {
    const scheduleActivity = new ScheduleActivity()
    beforeEach(() => {
        navigate()
        loginWithValidUsernameAndPassword(testData.username, testData.password)
    })
    it('should be able to schedule activity', () => {
        validateLoginSuccessfully(' Dashboard ')
        scheduleActivity.scheduleActivityWithoutWorklist()
        scheduleActivity.validateScheduledActivity('Your workflow has been scheduled successfully')
        scheduleActivity.validateDisplayingScheduledActivityOnCalendar(testData.ActivityName, testData.SchedulingDay)
    })

    it('should be able to delete scheduled activity', () => {
        scheduleActivity.ValidateDeleteScheduledActivity(testData.SchedulingDay)
    })

})