import { defineConfig, devices } from '@playwright/test';
import { BASE_URL, ENV, sessionJsonPath } from '@test_data';


export default defineConfig({
  testDir: './tests',
  expect: {
   timeout: 10 * 2000
  },

  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 6 : undefined,
  reporter: [["list"], ["html"  ]],
  globalSetup: './global.setup',
  use: {
    baseURL: BASE_URL[ENV as keyof typeof BASE_URL],
    trace: "retain-on-failure",
    screenshot: 'off',
    video: 'off',
    headless: true,
    testIdAttribute: 'data-qa',
    storageState: sessionJsonPath
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
