import { Page, Locator } from '@playwright/test'

export class GaragePage {
  readonly page: Page
  readonly heading: Locator
  readonly addCarButton: Locator
  readonly addCarModalTitle: Locator
  readonly fuelExpensesNavLink: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole('heading', { name: 'Garage' })
    this.addCarButton = page.locator('#addCarBtn, button:has-text("Add car")')
    this.addCarModalTitle = page.locator('.modal-content .modal-title')
    this.fuelExpensesNavLink = page.locator('a[href="/panel/expenses"]').last()
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space/panel/garage')
  }

  async waitForLoaded() {
    await this.heading.waitFor({ state: 'visible' })
  }

  async openAddCarModal() {
    await this.addCarButton.click()
  }

  async openExpensesPage() {
    await this.fuelExpensesNavLink.click()
  }

  async isOpen(): Promise<boolean> {
    return this.page.url().includes('/garage')
  }
}
