/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Perfil', () => {
    beforeEach(() => {
        cy.visit('/criar-perfil')
    });
    it('Criar perfil com sucesso', () => {
        cy.cadastrar()
        cy.login()
        cy.criarPerfil()        
    cy.get('[data-test="dashboard-deleteProfile"]').should('exist')
    });
    it('Mensagem de erro ao tentar cadastrar url inválida', () => {
        cy.cadastrar()
        cy.login()
        cy.criarPerfil('www')
        cy.get('.MuiFormHelperText-root').should('contain', 'Digite uma url válida')
    });
});