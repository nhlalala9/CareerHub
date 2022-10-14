describe('HomePage testing', () => {
  // it('Visits the initial project page', () => {
  //   cy.visit('/')
  //   cy.contains('app is running!')
  // })

  it('Goes to the homepage', () => {
    cy.visit('/public/home')
  });

  it('It has welcome message', () =>{
     // contains is case sensitive
     cy.contains('Welcome')
  });

  it('check if choose button is clickable and navigates to next page', () =>{
    cy.contains('career').click()
  });

  it('url after click', () =>{
    cy.url().should('include', '/choose/search')
  });

  it('check if help me choose button is clickable and navigates to next page', () =>{
    cy.contains('me').click()
  });

})
