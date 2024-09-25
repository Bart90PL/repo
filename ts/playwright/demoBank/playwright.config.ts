import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 3 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [
		['json', { outputFile: 'test-results/test-tesults.json' }],
		['list'],
	],
	use: {
		trace: 'on-first-retry',
	},
	timeout: 30000,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
});
