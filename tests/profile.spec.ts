import { test, expect } from '../utils/fixtures'
import { ProfilePage } from '../pom/pages/ProfilePage'

test.describe('Profile page', () => {
  test('should display mocked profile data from response body', async ({ userGaragePage }) => {
    const profilePage = new ProfilePage(userGaragePage.page)
    const mockedProfile = {
      status: 'ok',
      data: {
        userId: 337204,
        photoFilename: 'default-user.png',
        name: 'Oleksandr',
        lastName: 'Shcherbatiuk',
      },
    }

    await userGaragePage.page.route('**/api/users/profile', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockedProfile),
      })
    })

    await profilePage.open()
    await profilePage.waitForLoaded()

    await expect(profilePage.fullName('Oleksandr Shcherbatiuk')).toBeVisible()
  })
})
