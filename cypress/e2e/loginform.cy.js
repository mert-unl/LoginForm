describe('Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  /* Testlerin ekran görüntüsü için assets klasörü oluşturuldu ve bu klasörde testlerin ekran görüntüleri saklandı. */

    it('her şey doğru giriş yapıldı', () => {

  cy.get('[data-cy="email"]').type('mertun@ga.com')
cy.get('[data-cy="password"]').type('Succ3ss!')
cy.get('[data-cy="terms"]').check()
cy.get('[data-cy="submit"]').click()
cy.get('[data-cy="success"]').should('be.visible')
})

it('email yanlış diğerleri doldurulmadı', () => {
cy.get('[data-cy="email"]').type('12123@')
cy.get('[data-cy="submit"]').should('be.disabled')
cy.contains('Lütfen geçerli bir email adresi girin')
})


it('email ve password yanlış', () => {
  cy.get('[data-cy="email"]').type('1214a@.')
cy.get('[data-cy="password"]').type('1234')
cy.contains('Şifreniz en az 8 karakter olmalı ve en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir')
})


it('email ve password doğru ama check edilmedi', () => {
cy.get('[data-cy="email"]').type('mertun@ga.com')
cy.get('[data-cy="password"]').type('Succ3ss!')
cy.get('[data-cy="submit"]').should('be.disabled')
 })



})
