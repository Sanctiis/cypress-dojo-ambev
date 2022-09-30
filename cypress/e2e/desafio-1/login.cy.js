/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Login', () => {
    it('Efetuar login com sucesso', () => {
        let email = faker.internet.email()
        let nome = faker.name.firstName() + " " + faker.name.lastName()
        cy.cadastrar(nome = nome, email = email)
        cy.logout()

        cy.login(email = email)
        cy.get('[data-test="dashboard-welcome"]').should('contain', nome)
    });
});