import { clientId, clientSecret, baseUrl } from '../config/config';
import { Page } from 'playwright';
import { WebElementHelpers } from './webElementHelpers';

export async function loginWithClientCredentials(page: Page) {
	const webElementHelpers = new WebElementHelpers(page);

	try {
		await page.goto(baseUrl, { waitUntil: 'networkidle' });
		await webElementHelpers.loginIdInput.fill(clientId);
		await webElementHelpers.loginPasswordInput.fill(clientSecret);
		await webElementHelpers.loginButton.click();
		await page.waitForLoadState('networkidle');
	} catch (error) {
		console.error('Login Failed:', error);
		throw new Error('Failed to log in using client credentials.');
	}
}
