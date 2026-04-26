import { Page, Locator } from '@playwright/test'

export class SignInForm {
  readonly page: Page
  readonly modal: Locator
  readonly emailField: Locator
  readonly passwordField: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.modal = page.locator('.modal-content')
    this.emailField = page.locator('input[name="email"]')
    this.passwordField = page.locator('input[name="password"]')
    this.loginButton = page.locator('.modal-content button:has-text("Login")')
  }

  async waitForLoaded() {
    await this.modal.waitFor({ state: 'visible' })
  }

  async login(email: string, password: string) {
    await this.emailField.fill(email)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }
}
