import { Locator, Page } from '@playwright/test';

export class WebElementHelpers {
	public loginIdInput: Locator;
	public loginPasswordInput: Locator;
	public loginButton: Locator;
	public quickTransferButton: Locator;
	public transferReceiverSelector: Locator;
	public transferAmountInput: Locator;
	public transferTitleInput: Locator;
	public executeTransferButton: Locator;
	public closeConfirmationButton: Locator;
	public confirmationMessage: Locator;

	constructor(page: Page) {
		this.loginIdInput = page.locator('#login_id');
		this.loginPasswordInput = page.locator('#login_password');
		this.loginButton = page.locator('#login-btn');
		this.quickTransferButton = page.locator('#quick_btn');
		this.transferReceiverSelector = page.locator('#widget_1_transfer_receiver');
		this.transferAmountInput = page.locator('#widget_1_transfer_amount');
		this.transferTitleInput = page.locator('#widget_1_transfer_title');
		this.executeTransferButton = page.locator('#execute_btn');
		this.closeConfirmationButton = page.locator('[data-testid="close-button"]');
		this.confirmationMessage = page.locator('#ui-id-1');
	}
}
