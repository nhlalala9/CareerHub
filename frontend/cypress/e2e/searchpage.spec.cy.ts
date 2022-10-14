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

})