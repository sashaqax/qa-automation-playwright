import { test, expect } from '../utils/fixtures'

test.describe('Custom fixture userGaragePage', () => {
  test('should provide authorized GaragePage instance', async ({ userGaragePage }) => {
    await userGaragePage.waitForLoaded()

    await expect(userGaragePage.heading).toBeVisible()
    await expect(userGaragePage.page).toHaveURL(/\/panel\/garage/)
  })

  test('should allow working with GaragePage methods', async ({ userGaragePage }) => {
    await userGaragePage.waitForLoaded()
    await userGaragePage.openAddCarModal()

    await expect(userGaragePage.addCarModalTitle).toHaveText('Add a car')
  })
})
