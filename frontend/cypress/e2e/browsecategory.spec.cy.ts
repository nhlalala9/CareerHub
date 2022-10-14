// Arrange - setup initial app state // Act - take an action // Assert - make an assertion

describe('Browse category page', () => {
    it('goes to browse category page', () =>{
        cy.visit('/choose/category')
    });
});

describe('Test categories, clickable, correct url navigation', () =>{

    it('Has Art category clickable, correct url navigation', () => {
        cy.contains('Art').click()
        cy.url().should('include', 'choose/career/1/Art,%20Design%20and%20Architecture')
        cy.go('back')
    });

    it('Has Business category, clickable, correct url navigation', () => {
        cy.contains('Business').click()
        cy.url().should('include','/choose/career/2/Business,%20Economics')
        cy.go('back')
    });

    it('Has Engineering category , clickable, correct url navigation', () => {
        cy.contains('Engineering').click()
        cy.url().should('include','choose/career/3/Engineering')
        cy.go('back')
    });

    it('Has Science category , clickable, correct url navigation', () => {
        cy.contains('Science').click()
        cy.url().should('include','/choose/career/4/Science')
        cy.go('back')
    });

    it('Has Technology category , clickable, correct url navigation', () => {
        cy.contains('Technology').click()
        cy.url().should('include','/choose/career/5/Information%20Technology')
        cy.go('back')
    });
})