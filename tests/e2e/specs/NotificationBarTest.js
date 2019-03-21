import NotificationBar from '../../../src/components/NotificationBar'
const mountVue = require('cypress-vue-unit-test')

describe('NotificationBarComponent Test', () => {
  const template = `<NotificationBar  :notification="notification" />`
  const components = { NotificationBar }
  const data = {
    notification: {
      type: 'Success',
      message: 'Notification Test'
    }
  }
  beforeEach(mountVue({ template, components, data }))

  it('Check if Notification Text is displayed', () => {
    cy.contains('.notificationTypeClass', 'Notification Test')
    cy.wait(7000)
  })
})
