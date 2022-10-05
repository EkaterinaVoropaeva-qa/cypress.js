
describe('Тренировка на сайте демокуа', function () {
   it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();

        cy.contains("Авторизация прошла успешно");
        cy.get("#exitMessageButton > .exitIcon");

        
        
    })
})


describe('Тренировка на сайте демокуа', function () {
   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('german@dolnikov.ru');
               
        cy.get("#exitMessageButton > .exitIcon");

        
        
    })
})

describe('Тренировка на сайте демокуа', function () {
   it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio');
        cy.get("#loginButton").click();

        cy.contains("Нужно исправить проблему валидации");
        cy.get("#exitMessageButton > .exitIcon");

        
        
    })
})

describe('Тренировка на сайте демокуа', function () {
   it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('erman@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();

        cy.contains("Такого логина или пароля нет");
        cy.get("#exitMessageButton > .exitIcon");

        
        
    })
})
