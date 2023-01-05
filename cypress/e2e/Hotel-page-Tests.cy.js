///reference types = "Cypress"/>

describe('Hotel page test suite for Access Travel site', () => {

  it('navigate to the Hotel page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
  })

  it('populates Jerusalem, London and New York cities', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('[name="Filter.DestinationId"]').select('Jerusalem')
    cy.get('.form-centered > .btn').click()
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('[name="Filter.DestinationId"]').select('London')
    cy.get('.form-centered > .btn').click()
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('[name="Filter.DestinationId"]').select('New York')
    cy.get('.form-centered > .btn').click()

  })

  it('choosing a valid number of children', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('#Filter_ChildrenNum').should("be.visible")
    cy.get('#Filter_ChildrenNum').clear().type('1').should('have.value','1',{force:true})
    cy.get('.hotels-wrap').click()
    cy.get('[class="row children-age"]').should("be.visible")
    cy.get('[name="Filter.ChildrensAge[0]').clear().type('1',{force:true})
    cy.get('.form-centered > .btn').click()

  })

  it('invalid dates trigger an error', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('[name="Filter.CheckIn"]').should("be.visible")
    cy.get('[name="Filter.CheckIn"]').clear().type('0000-01-02')
    cy.get('[name="Filter.CheckOut"]').should("be.visible")
    cy.get('[name="Filter.CheckOut"]').clear().type('0000-03-04')
    cy.get('.form-centered > .btn').click()
    cy.contains("The value '0000-01-02' is not valid for CheckIn").should('exist')
    cy.contains("The value '0000-03-04' is not valid for CheckOut").should('exist')
    
  })

  it('invalid number of adults trigger an error', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('#Filter_DestinationId').should("be.visible")
    cy.get('#Filter_DestinationId').select('Paris')
    cy.get('[name="Filter.AdultNum"]').should("be.visible")
    cy.get('[name="Filter.AdultNum"]').clear().type('-1')
    cy.get('.form-centered > .btn').click()
    cy.contains("Invalid value").should('exist')
   
  })

  it('invalid number of children trigger an error', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('#Filter_DestinationId').should("be.visible")
    cy.get('#Filter_DestinationId').select('Paris')
    cy.get('[name="Filter.ChildrenNum"]').should("be.visible")
    cy.get('[name="Filter.ChildrenNum"]').clear().type('-1')
    cy.get('.form-centered > .btn').click()
    cy.contains("Invalid number").should('exist')
   
  })

})