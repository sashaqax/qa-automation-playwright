import { defineConfig, devices } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

const authFile = 'test-data/states/user1.json'

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 10000,
  },
  retries: 1,
  workers: 2,
  fullyParallel: false,
  reporter: [['html', { open: 'never' }], ['list']],
  outputDir: 'test-results',
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    httpCredentials: {
      username: process.env.HTTP_CREDENTIALS_USERNAME ?? 'guest',
      password: process.env.HTTP_CREDENTIALS_PASSWORD ?? 'welcome2qauto',
    },
  },
  projects: [
    {
      name: 'setup',
      testMatch: 'tests/setup/*.setup.ts',
    },
    {
      name: 'e2e-smoke',
      grep: /@smoke/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        storageState: authFile,
      },
      dependencies: ['setup'],
    },
    {
      name: 'e2e-regression',
      grep: /@regression/,
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        storageState: authFile,
      },
      dependencies: ['setup'],
    },
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        storageState: authFile,
      },
      dependencies: ['setup'],
    },
  ],
})
