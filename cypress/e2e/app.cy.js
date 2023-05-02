

describe('Navigation', ()=>{
    it('should navigate to about page', ()=>{
        cy.visit("http://localhost:3000/about")
        cy.get('div').contains('OSR');
    })
})  