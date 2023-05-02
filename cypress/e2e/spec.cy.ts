describe('template spec', () => {
  it('passes', () => {
    expect(true).to.equal(true);
  })
  it('My First test',()=>{
    cy.visit('https://example.cypress.io')
    cy.contains('type').click();
    cy.url().should('contain',"/commands/actions");
    cy.get(".action-email").type("ons@gmail.com");
    cy.get(".action-email").should('have.value','ons@gmail.com');
  })
})