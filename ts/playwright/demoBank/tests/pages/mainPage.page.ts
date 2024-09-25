import { Page } from '@playwright/test';
import { WebElementHelpers } from '../utils/webElementHelpers';

export class MainPage {
	private webElementHelpers: WebElementHelpers;

	constructor(page: Page) {
		this.webElementHelpers = new WebElementHelpers(page);
	}

	async navigateToQuickTransferSection(): Promise<void> {
		await this.webElementHelpers.quickTransferButton.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.quickTransferButton.click();
	}
}
