// pages/RegistrationPage.js
class RegistrationPage {
  constructor(page) {
    this.page = page
    this.nameInput = page.locator('input[name="name"]')
    this.lastNameInput = page.locator('input[name="lastName"]')
    this.emailInput = page.locator('input[name="email"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.repeatPasswordInput = page.locator('input[name="repeatPassword"]')
    this.registerButton = page.locator('.modal-content').getByRole('button', { name: 'Register' })
    this.signUpButton = page.getByRole('button', { name: 'Sign up' })
    this.modal = page.locator('.modal-content')
  }

  async open() {
    await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space/')
    await this.signUpButton.click()
    await this.modal.waitFor({ state: 'visible' })
  }

  async fillName(name) {
    await this.nameInput.fill(name)
    await this.nameInput.blur()
  }

  async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName)
    await this.lastNameInput.blur()
  }

  async fillEmail(email) {
    await this.emailInput.fill(email)
    await this.emailInput.blur()
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password)
    await this.passwordInput.blur()
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password)
    await this.repeatPasswordInput.blur()
  }

  async register(name, lastName, email, password) {
    await this.fillName(name)
    await this.fillLastName(lastName)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.fillRepeatPassword(password)
    await this.registerButton.click()
  }

  async isFieldInvalid(field) {
    return await field.evaluate(el => el.classList.contains('is-invalid'))
  }
}

module.exports = { RegistrationPage }