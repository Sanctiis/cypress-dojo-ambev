/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('Cadastrar usuário com sucesso', () => {
        cy.fixture("usuario").then((user) => {

        })
    });
});