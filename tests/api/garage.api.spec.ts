import test, { expect } from '@playwright/test';
import { getSidForUser } from '../../utils/api/getSidForUser';
import { garageController } from '../../controllers/GarageController';

test.describe('Garage API tests', () => {
  test('Get all brands', async ({ request }) => {
    const response = await garageController.getAllBrands(request);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.data).toHaveLength(5);
  });

  test('Get all models', async ({ request }) => {
    const response = await garageController.getAllModels(request);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.data).toHaveLength(23);
  });

  test('Get user cars. Auth option 1', async ({ request }) => {
    const response = await garageController.getUserCars(request, getSidForUser('user1'));

    expect(response.status()).toBe(200);
  });
});
