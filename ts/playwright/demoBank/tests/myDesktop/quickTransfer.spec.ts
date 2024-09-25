import { test, expect } from '@playwright/test';
import { loginWithClientCredentials } from '../utils/auth';
import { PageManager } from '../pages/pageManager';
import { quickTransferData } from '../fixtures/data/quickTransfer.data';
import { Messages } from '../fixtures/data/messages.data';

test.describe('Quick Transfer to Trusted Recipient', () => {
	test.beforeEach(async ({ page }) => {
		await loginWithClientCredentials(page);
	});

	test(
		'should perform quick transfer to saved recipient',
		{ tag: '@regression' },
		async ({ page }) => {
			const pm = new PageManager(page);
			await pm.onMainPage().navigateToQuickTransferSection();
			await pm.onQuickTransferPage().selectTrustedRecipient();
			await pm
				.onQuickTransferPage()
				.fillTransferDetails(quickTransferData.amount, quickTransferData.title);
			await pm.onQuickTransferPage().confirmTransfer();
			const confirmationMessage = pm.onQuickTransferPage().confirmationMessage;
			await expect(confirmationMessage).toHaveText(Messages.transferSuccess);
			await pm.onQuickTransferPage().closeConfirmationBox();
		}
	);
});
