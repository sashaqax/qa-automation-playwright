import { test, expect } from '@playwright/test';
import { VALID_USER1 } from '../../test-data/users';
import { authController } from '../../controllers/AuthController';

test.describe('Sign in and save storage state', () => {
  test('user1 sign in and save storage state', async ({ request }) => {
    const signinResponse = await authController.signin(
      request,
      VALID_USER1.email,
      VALID_USER1.password,
    );

    expect(signinResponse.status()).toBe(200);
    await request.storageState({ path: './test-data/states/user1.json' });
  });
});
