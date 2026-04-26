import { test, expect } from '../utils/fixtures'

test.describe('Garage page', () => {
  test('should open garage page with userGaragePage fixture', async ({ userGaragePage }) => {
    await userGaragePage.waitForLoaded()

    await expect(userGaragePage.heading).toBeVisible()
    await expect(userGaragePage.page).toHaveURL(/\/panel\/garage/)
    expect(await userGaragePage.isOpen()).toBeTruthy()
  })

  test('should display Add car button on garage page', async ({ userGaragePage }) => {
    await userGaragePage.waitForLoaded()

    await expect(userGaragePage.addCarButton).toBeVisible()
  })

  test('should open Add car modal for authorized user', async ({ userGaragePage }) => {
    await userGaragePage.waitForLoaded()
    await userGaragePage.openAddCarModal()

    await expect(userGaragePage.addCarModalTitle).toHaveText('Add a car')
  })
})
