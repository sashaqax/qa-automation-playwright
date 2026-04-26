import { test, expect } from '@playwright/test'
import { HomePage } from '../pom/pages/HomePage'
import { SignInForm } from '../pom/forms/SignInForm'
import { VALID_USER } from '../test-data/users'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Sign in', () => {
  test('should sign in with valid credentials @smoke @regression', async ({ page }) => {
    const homePage = new HomePage(page)
    const signInForm = new SignInForm(page)

    await homePage.open()
    await homePage.openSignInModal()
    await signInForm.waitForLoaded()
    await signInForm.login(VALID_USER.email, VALID_USER.password)

    await expect(page).toHaveURL(/\/panel\/garage/)
  })
})

