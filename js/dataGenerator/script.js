function toggleSettings() {
	const settings = document.getElementById('settings');
	settings.style.display =
		settings.style.display === 'block' ? 'none' : 'block';
}

function copyToClipboard(elementId) {
	const copyText = document.getElementById(elementId).value;

	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				showTemporaryAlert('Skopiowano: ' + copyText);
			})
			.catch((err) => {
				console.error('Błąd podczas kopiowania: ', err);
			});
	} else {
		const copyElement = document.getElementById(elementId);
		copyElement.select();
		document.execCommand('copy');
		showTemporaryAlert('Skopiowano: ' + copyText);
	}
}

function clearAllFields() {
	location.reload();
}

function copyToClipboard(elementId) {
	const copyText = document.getElementById(elementId).value;

	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				alert('Skopiowano: ' + copyText);
			})
			.catch((err) => {
				console.error('Błąd podczas kopiowania: ', err);
			});
	} else {
		// Fallback dla starszych przeglądarek
		const copyElement = document.getElementById(elementId);
		copyElement.select();
		document.execCommand('copy');
		alert('Skopiowano: ' + copyText);
	}
}

function generatePeselNumber() {
	const birthdateInput = document.getElementById('birthdate').value;
	let year, month, day;

	if (birthdateInput) {
		const birthdate = new Date(birthdateInput);
		year = birthdate.getFullYear();
		month = birthdate.getMonth() + 1;
		day = birthdate.getDate();
	} else {
		year = Math.floor(Math.random() * 235) + 1800;
		month = Math.floor(Math.random() * 12) + 1;
		day = Math.floor(Math.random() * 28) + 1;
	}

	if (year > 1999 && year <= 2099) {
		month += 20;
		year -= 2000;
	} else if (year >= 2100 && year <= 2199) {
		month += 40;
		year -= 2100;
	} else if (year >= 1800 && year <= 1899) {
		month += 80;
		year -= 1800;
	} else {
		year -= 1900;
	}

	const yearStr = String(year).padStart(2, '0');
	const monthStr = String(month).padStart(2, '0');
	const dayStr = String(day).padStart(2, '0');

	// Wybór płci lub losowanie, jeśli żadna nie jest wybrana
	const selectedGender = document.querySelector('input[name="gender"]:checked');
	let gender;
	if (selectedGender) {
		gender = selectedGender.value;
	} else {
		// Losowy wybór płci, jeśli żadna nie jest wybrana
		gender = Math.random() < 0.5 ? 'male' : 'female';
	}

	let randomNumber;
	if (gender === 'male') {
		randomNumber = Math.floor(Math.random() * 5000) * 2 + 1;
	} else {
		randomNumber = Math.floor(Math.random() * 5000) * 2;
	}

	const rndStr = String(randomNumber).padStart(4, '0');
	const peselWithoutControl = `${yearStr}${monthStr}${dayStr}${rndStr}`;

	let checksum = 0;
	const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	for (let i = 0; i < weights.length; i++) {
		checksum += weights[i] * parseInt(peselWithoutControl.charAt(i));
	}
	checksum = (10 - (checksum % 10)) % 10;

	const pesel = `${peselWithoutControl}${checksum}`;
	document.getElementById('pesel').value = pesel;
}

function generateIdCardNumber() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const digits = '0123456789';

	const letterValues = {
		A: 10,
		B: 11,
		C: 12,
		D: 13,
		E: 14,
		F: 15,
		G: 16,
		H: 17,
		I: 18,
		J: 19,
		K: 20,
		L: 21,
		M: 22,
		N: 23,
		O: 24,
		P: 25,
		Q: 26,
		R: 27,
		S: 28,
		T: 29,
		U: 30,
		V: 31,
		W: 32,
		X: 33,
		Y: 34,
		Z: 35,
	};

	let series = '';
	for (let i = 0; i < 3; i++) {
		series += letters.charAt(Math.floor(Math.random() * letters.length));
	}

	let numbers = '';
	for (let i = 0; i < 5; i++) {
		numbers += digits.charAt(Math.floor(Math.random() * digits.length));
	}

	const weights = [7, 3, 1, 7, 3, 1, 7, 3, 1];
	let controlSum = 0;

	for (let i = 0; i < 3; i++) {
		controlSum += letterValues[series.charAt(i)] * weights[i];
	}

	for (let i = 0; i < 5; i++) {
		controlSum += parseInt(numbers.charAt(i)) * weights[i + 3];
	}

	const controlDigit = controlSum % 10;

	const idCardNumber = series + controlDigit.toString() + numbers;
	document.getElementById('idCardNumber').value = idCardNumber;
}

function generateNipNumber() {
	const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
	let nip = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
	let controlSum = nip.reduce(
		(sum, digit, index) => sum + digit * weights[index],
		0
	);
	let controlDigit = controlSum % 11;
	if (controlDigit == 10) {
		return generateNipNumber();
	}
	nip.push(controlDigit);

	const nipNumber = nip.join('');
	document.getElementById('nip').value = nipNumber;
}

function generateRegonNumber() {
	const weights = [8, 9, 2, 3, 4, 5, 6, 7];
	let regon = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
	let controlSum = regon.reduce(
		(sum, digit, index) => sum + digit * weights[index],
		0
	);
	let controlDigit = controlSum % 11;
	if (controlDigit === 10) {
		controlDigit = 0;
	}
	regon.push(controlDigit);
	const regonNumber = regon.join('');
	document.getElementById('regon').value = regonNumber;
}

function generateKrsNumber() {
	let courtNumber = Math.floor(Math.random() * 99) + 1;
	let registryNumber = Math.floor(Math.random() * 9999) + 1;
	courtNumber = courtNumber < 10 ? '0' + courtNumber : courtNumber;
	registryNumber =
		registryNumber < 1000 ? '0' + registryNumber : registryNumber;
	let krs = '0000' + courtNumber + registryNumber;

	document.getElementById('krs').value = krs;
}

function generateAccountNumber() {
	const bankCode = '12345678';
	const checksum = bankCode.slice(0, 2);
	let accountNumber = checksum;

	for (let i = 0; i < 22; i++) {
		accountNumber += Math.floor(Math.random() * 10);
	}

	document.getElementById('accountNumber').value = accountNumber;
}

generatePeselNumber();
generateIdCardNumber();
generateNipNumber();
generateRegonNumber();
generateKrsNumber();
generateAccountNumber();
