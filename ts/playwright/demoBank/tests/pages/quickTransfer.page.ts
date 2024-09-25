import { Page } from '@playwright/test';
import { WebElementHelpers } from '../utils/webElementHelpers';

export class QuickTransferPage {
	transferAmountInput(transferAmountInput: any) {
		throw new Error('Method not implemented.');
	}
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

	async selectTrustedRecipient(index = 1): Promise<void> {
		await this.webElementHelpers.transferReceiverSelector.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.transferReceiverSelector.selectOption({
			index,
		});
	}

	async fillTransferDetails(amount: string, title: string): Promise<void> {
		await this.webElementHelpers.transferAmountInput.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.transferAmountInput.fill(amount);

		await this.webElementHelpers.transferTitleInput.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.transferTitleInput.fill(title);
	}

	async confirmTransfer(): Promise<void> {
		await this.webElementHelpers.executeTransferButton.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.executeTransferButton.click();
	}

	async closeConfirmationBox(): Promise<void> {
		await this.webElementHelpers.closeConfirmationButton.waitFor({
			state: 'visible',
		});
		await this.webElementHelpers.closeConfirmationButton.click();
	}

	public get confirmationMessage() {
		return this.webElementHelpers.confirmationMessage;
	}
}
