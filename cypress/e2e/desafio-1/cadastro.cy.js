/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {
    it('Mensagem de alerta ao tentar cadastrar email repetido', () => {
        let email = faker.internet.email()
        let nome = faker.name.firstName() + " " + faker.name.lastName()
        cy.cadastrar(email)
        cy.logout()

        cy.visit('/cadastrar')

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123412')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });
});