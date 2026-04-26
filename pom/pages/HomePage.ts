import { Page, Locator } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly heroTitle: Locator
  readonly signInButton: Locator
  readonly signUpButton: Locator

  constructor(page: Page) {
    this.page = page
    this.heroTitle = page.getByRole('heading', { name: 'Do more!' })
    this.signInButton = page.locator('.header_signin')
    this.signUpButton = page.locator('button.btn-primary')
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space/')
  }

  async waitForLoaded() {
    await this.heroTitle.waitFor({ state: 'visible' })
  }

  async openSignInModal() {
    await this.signInButton.click()
  }

  async openSignUpModal() {
    await this.signUpButton.click()
  }
}
