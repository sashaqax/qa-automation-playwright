import { test, expect } from '@playwright/test'
import { GaragePage } from '../pom/pages/GaragePage'

test.describe('Stored session', () => {
  test('should open garage page with saved storage state', async ({ browser }) => {
    const context = await browser.newContext({
      storageState: 'test-data/states/user1.json',
    })
    const page = await context.newPage()
    const garagePage = new GaragePage(page)

    await garagePage.open()
    await garagePage.waitForLoaded()

    await expect(garagePage.page).toHaveURL(/\/panel\/garage/)
    await expect(garagePage.addCarButton).toBeVisible()

    await context.close()
  })
})
