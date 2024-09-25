export function generateRandomTransferTitle(): string {
	const titles = [
		'Payment for services',
		'Invoice #12345',
		'Loan repayment',
		'Gift transfer',
		'Charity donation',
		'Refund for purchase',
		'Subscription fee',
		'Rent payment',
		'Salary transfer',
		'Bonus payment',
	];

	const randomIndex = Math.floor(Math.random() * titles.length);
	return titles[randomIndex];
}

export function generateRandomTransferAmount(): string {
	const maxAmount = 1000;
	const randomAmount = Math.random() * maxAmount;
	return (Math.round(randomAmount * 100) / 100).toFixed(2);
}
