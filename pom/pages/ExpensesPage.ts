import { Locator, Page } from '@playwright/test'

export class ExpensesPage {
  readonly page: Page
  readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole('heading', { name: 'Fuel expenses' })
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space/panel/expenses')
  }

  async waitForLoaded() {
    await this.heading.waitFor({ state: 'visible' })
  }
}
