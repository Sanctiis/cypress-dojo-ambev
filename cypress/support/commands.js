/// <reference types="cypress" />

import usuario from '../fixtures/usuario.json'

const faker = require('faker-br')


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cadastrar', (nome = usuario.nome, email = usuario.email, senha = usuario.senha) => {
    cy.visit('/cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-test="navbar-logout"] > .hide-sm').click()
})

Cypress.Commands.add('login', (email = usuario.email, senha = usuario.senha) => {
    cy.visit('/login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
    cy.get('.large').should('contain', 'Dashboard')
})

Cypress.Commands.add('criarPerfil', (site) => {
    cy.visit('/criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('.MuiList-root').find('li[data-value="QA Pleno"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Diogolandia')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(site || 'http://www.google.com')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Matipó')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JavaScript, NodeJS, C#')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('diogolandiahub')
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Olá, sou o Diogo')
    cy.get('[data-test="profile-submit"]').click()
})