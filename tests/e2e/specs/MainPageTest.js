// https://docs.cypress.io/api/introduction/api.html
import user from '../../../src/store/store.js'
describe('Check Main Page Elements', () => {
  before('Visit Root URL', () => {
    cy.visit('/')
  })

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Events For')
    console.log('Store:')
    console.log(user.modules)
  })

  it('Click on First Event', () => {
    cy.get('.event-card')
      .first()
      .click()
  })

  it('Is title correct?', () => {
    cy.get('.title').then($el => {
      expect($el.text()).to.equal('Beach Cleanup')
    })
  })
})
