const { test, expect } = require('@playwright/test')

const uniqueEmail = `aqa_${Date.now()}@test.com`

test.describe('Registration form', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/')
  await page.getByRole('button', { name: 'Sign up' }).click()
  await expect(page.locator('.modal-content')).toBeVisible()
})

  
  test('should register successfully with valid data', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Oleksandr')
    await page.locator('input[name="lastName"]').fill('Shcherbatiuk')
    await page.locator('input[name="email"]').fill(uniqueEmail)
    await page.locator('input[name="password"]').fill('Drift45@')
    await page.locator('input[name="repeatPassword"]').fill('Drift45@')
    await page.locator('.modal-content').getByRole('button', { name: 'Register' }).click()

    await expect(page).toHaveURL(/garage/)
  })

  
  test('should show error when Name is empty', async ({ page }) => {
    await page.locator('input[name="name"]').focus()
    await page.locator('input[name="name"]').blur()
    await expect(page.locator('input[name="name"]')).toHaveClass(/is-invalid/)
  })

  test('should show error when Name is less than 2 characters', async ({ page }) => {
    await page.locator('input[name="name"]').fill('A')
    await page.locator('input[name="name"]').blur()
    await expect(page.locator('input[name="name"]')).toHaveClass(/is-invalid/)
  })

  test('should show error when Name is more than 20 characters', async ({ page }) => {
    await page.locator('input[name="name"]').fill('A'.repeat(21))
    await page.locator('input[name="name"]').blur()
    await expect(page.locator('input[name="name"]')).toHaveClass(/is-invalid/)
  })

  
  test('should show error when Last Name is empty', async ({ page }) => {
    await page.locator('input[name="lastName"]').focus()
    await page.locator('input[name="lastName"]').blur()
    await expect(page.locator('input[name="lastName"]')).toHaveClass(/is-invalid/)
  })

  
  test('should show error for invalid email', async ({ page }) => {
    await page.locator('input[name="email"]').fill('notvalid')
    await page.locator('input[name="email"]').blur()
    await expect(page.locator('input[name="email"]')).toHaveClass(/is-invalid/)
  })

  
  test('should show error when Password is too short', async ({ page }) => {
    await page.locator('input[name="password"]').fill('Ab1!')
    await page.locator('input[name="password"]').blur()
    await expect(page.locator('input[name="password"]')).toHaveClass(/is-invalid/)
  })

  test('should show error when passwords do not match', async ({ page }) => {
    await page.locator('input[name="password"]').fill('Drift45@')
    await page.locator('input[name="repeatPassword"]').fill('Other999!')
    await page.locator('input[name="repeatPassword"]').blur()
    await expect(page.locator('input[name="repeatPassword"]')).toHaveClass(/is-invalid/)
  })

})