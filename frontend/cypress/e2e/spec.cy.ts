describe('HomePage testing', () => {

    it('Goes to the homepage', () => {
      cy.visit('/public/home')
    });
  
    it('It has welcome message', () =>{
       // contains is case sensitive
       cy.contains('Welcome')
    });

    it('check if help me choose button is clickable and navigates to next page', () =>{
        cy.contains('me').click()
      });
  
    it('check if choose button is clickable and navigates to next page', () =>{
      cy.contains('career').click()
    });
  
    it('url after click', () =>{
      cy.url().should('include', '/choose/search')
    });
  
});

describe('Search page', () => {

    it('goes to search page', () => {
        cy.visit('choose/search')
    });

    it('finds search input bar', () =>{
        cy.get('Input')
    });

    it('search career on input bar', () =>{
        cy.get('Input').type('business Consultant').should('have.value', 'business Consultant')
    });

    it('searched career is clickable', () => {
        cy.contains('Consultant').click()
    });

    it('URL endpoint correct after click', () =>{
        cy.url().should('contain', '/choose/summary/5/Business%20Consultant')
        cy.go('back')
    });

    it('has browse career button', () => {
        cy.get('button')
    });

});

describe('Browse category page/careers page', () => {
    it('goes to browse category page', () =>{
        cy.visit('/choose/category')
    });
});

describe('Test categories, clickable, correct url navigation', () =>{

    it('Has Art category clickable, correct url navigation', () => {
        cy.contains('Art').click()
        cy.url().should('include', 'choose/career/1/Art,%20Design%20and%20Architecture')
        cy.contains('ART GRAPHIC').click()
        cy.contains('DUTIES')
        cy.get('button').contains('Requirements').click()
        cy.get('input')
        cy.go('back')
        cy.go('back')
        cy.go('back')
    });

    it('Has Business category, clickable, correct url navigation', () => {
        cy.contains('Business').click()
        cy.url().should('include','/choose/career/2/Business,%20Economics')
        cy.contains('FINANCIAL PLANNER').click()
        cy.contains('DUTIES')
        cy.get('button').contains('Requirements').click()
        cy.get('input')
        cy.go('back')
        cy.go('back')
        cy.go('back')
    });

    it('Has Engineering category , clickable, correct url navigation', () => {
        cy.contains('Engineering').click()
        cy.url().should('include','choose/career/3/Engineering')
        cy.contains('CIVIL ENGINEER').click()
        cy.contains('DUTIES')
        cy.get('button').contains('Requirements').click()
        cy.get('input')
        cy.go('back')
        cy.go('back')
        cy.go('back')
    });

    it('Has Science category , clickable, correct url navigation', () => {
        cy.contains('Science').click()
        cy.url().should('include','/choose/career/4/Science')
        cy.contains('PSYCHOLOGIST').click()
        cy.contains('DUTIES')
        cy.get('button').contains('Requirements').click()
        cy.get('input')
        cy.go('back')
        cy.go('back')
        cy.go('back')
    });

    it('Has Technology category , clickable, correct url navigation', () => {
        cy.contains('Technology').click()
        cy.url().should('include','/choose/career/5/Information%20Technology')
        cy.contains('WEB DEVELOPER').click()
        cy.contains('DUTIES')
        cy.get('button').contains('Requirements').click()
        cy.get('input')
        cy.go('back')
        cy.go('back')
        cy.go('back')
    });
});