/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('/cadastrar')
    });
    it.skip('Cadastrar usuário com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Diogo Paiva')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('paiva.722@gmail.com')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Diogo Paiva')
    });

    it('Cadastrar usuário com sucesso dados no código', () => {
        let nome = faker.name.firstName() + " " + faker.name.lastName()
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        //cy.get('[data-test="register-submit"]').click()

        ///cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Diogo Paiva')
    });
});