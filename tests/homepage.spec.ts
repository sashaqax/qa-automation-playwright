import { test, expect } from '@playwright/test'
import { HomePage } from '../pom/pages/HomePage'
import { SignInForm } from '../pom/forms/SignInForm'

test.describe('Home page', () => {
  test.use({ storageState: { cookies: [], origins: [] } })

  test('should display main page content', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.open()
    await homePage.waitForLoaded()

    await expect(homePage.heroTitle).toBeVisible()
    await expect(homePage.signInButton).toBeVisible()
    await expect(homePage.signUpButton).toBeVisible()
  })

  test('should open sign in modal from homepage', async ({ page }) => {
    const homePage = new HomePage(page)
    const signInForm = new SignInForm(page)

    await homePage.open()
    await homePage.openSignInModal()
    await signInForm.waitForLoaded()

    await expect(signInForm.emailField).toBeVisible()
    await expect(signInForm.passwordField).toBeVisible()
    await expect(signInForm.loginButton).toBeVisible()
  })
})
