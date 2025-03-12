describe('My First Test', (): void => {
  it('visits the app root url', (): void => {
    cy.visit('/');
    cy.contains('h1', 'You did it!');
  });
});
