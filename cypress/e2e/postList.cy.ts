describe('PostList Component', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', { fixture: 'posts.json' });
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' });
      cy.visit('/');
    });
    
    it('renders loading state initially', () => {
      cy.get('p').contains('Loading posts...').should('be.visible');
    });
  
    it('renders posts after loading', () => {
      cy.get('h2').should('have.length', 2);
      cy.get('h2').first().contains('Post Title 1');
      cy.get('h2').last().contains('Post Title 2');
    });
  
    it('filters posts by author', () => {
      cy.get('select').select('Don Jon');
      cy.get('h2').should('have.length', 1);
      cy.get('h2').contains('Post Title 1');
    });
  });