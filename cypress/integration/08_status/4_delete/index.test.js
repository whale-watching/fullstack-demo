/*
 * Copyright © Chen Chris. All rights reserved.
 * See LICENSE for license details.
 */

const url = /status/;

before(() => {
    cy.login(Cypress.env('adminEmail'), Cypress.env('adminPass'));
});

beforeEach(() => {
    cy.intercept(
        {
            method: 'GET',
            url,
        },
    ).as(`${Cypress.spec.name}_GET`);
});
