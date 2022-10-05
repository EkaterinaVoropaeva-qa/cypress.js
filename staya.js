describe('Тренировка на сайте Стая', function () {
   it('Проверка на авторизацию не верный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('voropaeva.yekaterina@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('376264369K');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains("Невозможно зайти с предоставленными учетными данными");
        
           
        
    })
})
