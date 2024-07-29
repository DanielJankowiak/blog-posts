describe('AuthorFilter Component', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' });
      cy.visit('/');
    });
  
    it('renders loading state initially', () => {
      cy.get('p').contains('Loading authors...').should('be.visible');
    });
  
    it('renders authors after loading', () => {
      cy.get('select option').should('have.length', 3);
      cy.get('select option').eq(1).contains('Don Jon');
      cy.get('select option').eq(2).contains('Hi Wuan');
    });
  
    it('selects an author', () => {
      cy.get('select').select('Don Jon');
      cy.get('select').should('have.value', '1');
    });
  });