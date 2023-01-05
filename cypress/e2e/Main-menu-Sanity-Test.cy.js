///reference types = "Cypress"/>

describe('sanity test suite for Access Travel site', () => {

  it('navigate to the main page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })


  it('verify tabs of the page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('.hotels').should("be.visible")
    cy.get('.guides').should("be.visible")
    cy.get('.js-list-tours').should("be.visible")
    cy.get('.attraction-link').should("be.visible")

  })

  it('verify that clicking on the Hotel tab navigates to the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('.hotels').click()
    cy.get('.sub-heading').should("have.text", "Find Your Inclusive Hotel!")

  })

  it('verify that clicking on the Guides tab navigates to the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('.guides').click()
    cy.get('h2').should("have.text", " Inclusive Travel Companions, Advisors and Guides")

  })

  it('verify that clicking on the Tours tab navigates to the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('.js-list-tours').click()
    cy.get('h2').should("have.text", "Discover amazing accessible to all tours and services ")

  })

  it('verify that clicking on the Things to do tab navigates to the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('.attraction-link').click()
    cy.get('.attractions-search__head-title').should("have.text", " Inclusive attractions and tours")

  })

  it('verify that clicking on Login opens the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('div.nav-access > [href="/en-US/Account/Login"]').click()
    cy.get('div.nav-access > [href="/en-US/Account/Login"]').should("be.visible")
    cy.get('div.nav-access > [href="/en-US/Account/Login"]').invoke('text').should('eq', 'Login')

  })

  it('verify that clicking on Signup opens the correct page ', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.get('div.nav-access > [href="/en-US/Account/Register"]').click()
    cy.get('div.nav-access > [href="/en-US/Account/Register"]').should("be.visible")
    cy.get('div.nav-access > [href="/en-US/Account/Register"]').invoke('text').should('eq', 'Signup')

  })

})











