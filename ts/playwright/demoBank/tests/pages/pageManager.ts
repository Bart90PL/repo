import { Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage.page';
import { QuickTransferPage } from '../pages/quickTransfer.page';

export class PageManager {
	private readonly page: Page;
	private readonly mainPage: MainPage;
	private readonly quickTransferPage: QuickTransferPage;

	constructor(page: Page) {
		this.page = page;
		this.mainPage = new MainPage(this.page);
		this.quickTransferPage = new QuickTransferPage(this.page);
	}

	onMainPage() {
		return this.mainPage;
	}

	onQuickTransferPage() {
		return this.quickTransferPage;
	}
}
