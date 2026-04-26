import { Locator, Page } from '@playwright/test'

export class ProfilePage {
  readonly page: Page
  readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole('heading', { name: 'Profile' })
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space/panel/profile')
  }

  async waitForLoaded() {
    await this.heading.waitFor({ state: 'visible' })
  }

  fullName(fullName: string) {
    return this.page.getByText(fullName, { exact: true })
  }
}
