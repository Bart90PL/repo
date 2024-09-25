import {
	generateRandomTransferTitle,
	generateRandomTransferAmount,
} from '../../utils/testHelpers';

export const quickTransferData: {
	amount: string;
	title: string;
} = {
	amount: generateRandomTransferAmount(),
	title: generateRandomTransferTitle(),
};
