import React from 'react';
import DashboardComponent from '@/components/dashboardForTestOnCypress'; // Adjust the import to your actual component path
import { mount } from '@cypress/react18';
 describe('Dashboard Component Tests', () => {
beforeEach(() => {
  mount(<DashboardComponent/>);
});

it('should render the sidebar and main content', () => {
  // Check if the sidebar is rendered
  cy.get('.w-60').should('be.visible'); // Sidebar class
  cy.get('h1').contains("Rexwork's").should('be.visible'); // Check company title
  // Check if the dashboard header is rendered
  cy.get('h2').contains('Dashboard').should('be.visible');
});

it('should navigate between pages', () => {
  // Click on the "Projects" button
  cy.get('button').contains('Projects').click();
  // Navigate back to the dashboard
  cy.get('button').contains('Home').click();
});

it('should open the create new modal when New button is clicked', () => {
  // Click on the "New" button
  cy.get('button').contains('New').click();

  // Check if the modal is visible
  cy.get('absolute top-16 right-4 bg-grey shadow-lg rounded-lg p-4 w-54 z-50 mr-4').should('be.visible'); // Replace with the actual modal class
  // Close the modal
  cy.get('.close-button-class').click(); // Replace with the actual close button selector
  cy.get('.modal-class').should('not.exist'); // Ensure modal is closed
});

it('should toggle the popup menu when clicking on the more options button', () => {
  // Click the more options button
  cy.get('button').contains('More').click();
  // Check if the popup is visible
  cy.get('.absolute.top-16.right-4').should('be.visible'); // Replace with the actual popup selector
  // Click again to close the popup
  cy.get('button').contains('More').click();
  cy.get('.absolute.top-16.right-4').should('not.exist'); // Ensure popup is closed
});

it('should display ongoing projects', () => {
  // Ensure that ongoing projects are displayed
  cy.get('h3').contains('Ongoing Projects').should('be.visible');
  cy.get('.grid.grid-cols-3').children().should('have.length.greaterThan', 0); // Ensure there are projects listed
});
});

