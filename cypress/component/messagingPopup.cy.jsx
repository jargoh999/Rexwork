// cypress/component/MessagingPopup.cy.js

import MessagingPopup from "../../src/components/messaging-popup";

describe('MessagingPopup Component', () => {
    beforeEach(() => {
      cy.mount(<MessagingPopup triggerButton={<button>Open Messaging</button>} />);
    });
  
    it('should open the dialog when the trigger button is clicked', () => {
      cy.contains('Open Messaging').click();
      cy.contains('Messaging').should('be.visible');
    });
  
    it('should display the messages', () => {
      cy.contains('Open Messaging').click();
      cy.contains("Were you able to attend this morning's meeting?").should('be.visible');
      cy.contains('Yes, very informative').should('be.visible');
      cy.contains("I'll get back to you").should('be.visible');

    });
  
    it('should send a new message', () => {
      cy.contains('Open Messaging').click();
      cy.get('input[placeholder="Type a message..."]').type('New message');
      cy.get('input[placeholder="Type a message..."]').type('are you okay?');
      cy.get('button').should('have.class', 'ml-2');
      cy.get('svg').should('have.class', 'h-4 w-4');
      cy.get('svg').should('have.class','h-4 w-4')
      cy.get('input[placeholder="Type a message..."]').should('have.value', 'New messageare you okay?');
    });
  
    it('should show the current date for new message groups', () => {
      cy.contains('Open Messaging').click();
      cy.contains(new Date().toLocaleDateString()).should('be.visible');
    });
  });
  