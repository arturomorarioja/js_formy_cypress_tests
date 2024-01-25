describe('Meaghan Lewis\'s Formy test page', () => {
    it('keypress passes', () => {
        cy.visit('keypress');

        cy.get('#name').type('KEA Development');
        cy.get('#button').click();
    });

    it('scroll passes', () => {
        cy.visit('scroll');

        cy.get('#name').scrollIntoView();
        cy.get('#name').type('KEA Development');
        cy.get('#date').type('20/04/2023');
    });

    it('new tab passes', () => {
        cy.visit('switch-window');

        // Cypress does not allow to handle new tabs, so the test ends when the "Open new tab" button is clicked.
        // cy.get('#new-tab-button').invoke('removeAttr', 'target').click();
    });

    it('alert passes', () => {
        cy.visit('switch-window');

        cy.get('#alert-button').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('This is a test alert!');
        })
    });

    /* 
        The drag and drop page is not tested, as Cypress does not handle it directly
    */

    it('datepicker passes', () => {
        cy.visit('datepicker');

        cy.get('#datepicker').type('20/04/2023').type('{enter}').blur();
    });

    it('modal passes', () => {
        cy.visit('modal');

        cy.get('#modal-button').click();

        cy.get('#close-button').click({ force: true });
        cy.get('#close-button').should('not.be.visible');
    });

    it('form passes', () => {
        cy.visit('form');

        cy.get('#first-name').type('Arturo');
        cy.get('#last-name').type('Mora-Rioja');
        cy.get('#job-title').type('Associate Professor');
        cy.get('#radio-button-3').check();
        cy.get('#checkbox-1').check();
        cy.get('#select-menu').select('4');
        cy.get('#datepicker').type('20/04/2023').type('{enter}');
        cy.get('a.btn.btn-lg.btn-primary').first().click();
    });
})