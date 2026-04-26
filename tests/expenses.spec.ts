import { test, expect } from '../utils/fixtures'
import { ExpensesPage } from '../pom/pages/ExpensesPage'

test.describe('Expenses page', () => {
  test('should open fuel expenses page for authorized user', async ({ userGaragePage }) => {
    const expensesPage = new ExpensesPage(userGaragePage.page)

    await userGaragePage.waitForLoaded()
    await userGaragePage.openExpensesPage()
    await expensesPage.waitForLoaded()

    await expect(expensesPage.page).toHaveURL(/\/panel\/expenses/)
    await expect(expensesPage.heading).toBeVisible()
  })
})
