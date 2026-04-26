import test, { expect } from '@playwright/test'
import { garageController } from '../../controllers/GarageController'
import { getSidForUser } from '../../utils/api/getSidForUser'

test.describe('Create car API tests', () => {
  test('should create a car with valid data', async ({ request }) => {
    const response = await garageController.createCar(request, getSidForUser('user1'), 1, 1, 122)
    const responseBody = await response.json()

    expect(response.status()).toBe(201)
    expect(responseBody.status).toBe('ok')
    expect(responseBody.data.carBrandId).toBe(1)
    expect(responseBody.data.carModelId).toBe(1)
    expect(responseBody.data.initialMileage).toBe(122)
  })

  test('should return 400 when mileage is negative', async ({ request }) => {
    const response = await garageController.createCar(request, getSidForUser('user1'), 1, 1, -1)
    const responseBody = await response.json()

    expect(response.status()).toBe(400)
    expect(responseBody.status).toBe('error')
    expect(responseBody.message).toBe('Mileage has to be from 0 to 999999')
  })

  test('should return 400 when car model id is missing', async ({ request }) => {
    const response = await request.post('/api/cars', {
      headers: {
        Cookie: `sid=${getSidForUser('user1')}`,
      },
      data: {
        carBrandId: 1,
        mileage: 100,
      },
    })
    const responseBody = await response.json()

    expect(response.status()).toBe(400)
    expect(responseBody.status).toBe('error')
    expect(responseBody.message).toBe('Car model id is required')
  })
})
