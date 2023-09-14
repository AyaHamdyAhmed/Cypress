import* as elem from "../fixtures/object-repo.json"
export class ScheduleActivity {
    scheduleActivityWithoutWorklist() {
        cy.get(elem.Dashboard_scheduleActivitybtn).click()
        cy.get(elem.ScheduleActivity_SelectActivityDdl).click()
        cy.get(elem.ScheduleActivity_ActivityOpt).click()
        cy.get(elem.ScheduleActivity_RunningByDdl).click()
        cy.get(elem.ScheduleActivity_RunningByOpt).click()
        cy.get(elem.ScheduleActivity_CalendarPopup).click()
        cy.get(elem.ScheduleActivity_CalendarDay).click()
        cy.get(elem.ScheduleActivity_SimulationChx).click()
        cy.get(elem.ScheduleActivity_AutomateLoadingChx).click()
        cy.get(elem.ScheduleActivity_AutomateUnloadingChx).click()
        cy.get(elem.ScheduleActivity_AddBtn).click()
    }
    validateScheduledActivity(expectedTxt) {
        cy.get(elem.ScheduleActivity_toastMsg).should('have.text', expectedTxt)
    }
    validateDisplayingScheduledActivityOnCalendar(activityName, day) {
        cy.get(elem.SideNavMenu_CalendarTab).click()
        cy.get(elem.Calendar_day).contains(day).click()
        cy.get(elem.Calendar_ScheduledActivitiesPopup).should('have.text', activityName)

    }
    getNumberOfscheduledActivities(no) {
        cy.get(elem.SideNavMenu_CalendarTab).click()
        let txt = cy.get(elem.Calendar_NoOfScheduledActivities).text()
        cy.log("text            " + txt)
        expect(txt).to.be.greaterThan(no)

    }
    ValidateDeleteScheduledActivity(schedulingDay) {
        cy.get(elem.SideNavMenu_CalendarTab).click()
        cy.get(elem.Calendar_day).contains(schedulingDay).click()
        cy.get(elem.Calendar_ActivitiesPopup_actionsMenu).click()
        cy.get(elem.Calendar_ActivitiesPopup_actionsMenu_deleteOpt).click()
        cy.get(elem.Calendar_ConfirmDeleteActivityPopup_yesBtn).click()
        cy.get(elem.Calendar_ActivitiesPopup_SaveBtn).click()
    }


}