document
	.getElementById('registrationForm')
	.addEventListener('submit', function (event) {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		if (!validateEmail(email)) {
			alert('Invalid email address.');
			event.preventDefault();
		}

		if (password !== confirmPassword) {
			alert('Passwords must match.');
			event.preventDefault();
		}
	});

function validateEmail(email) {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return re.test(String(email).toLowerCase());
}

function validatePhone() {
	const phoneInput = document.getElementById('phone');
	const phoneError = document.getElementById('phoneError');

	const isValid = /^\d{9}$/.test(phoneInput.value);

	phoneError.style.display = isValid ? 'none' : 'block';
}

function validateName() {
	const nameInput = document.getElementById('name');
	const nameError = document.getElementById('nameError');

	const isValid = /^[a-zA-Z]+$/.test(nameInput.value);

	nameError.style.display = isValid ? 'none' : 'block';
}

function validateSurname() {
	const surnameInput = document.getElementById('surname');
	const surnameError = document.getElementById('surnameError');

	const isValid = /^[a-zA-Z]+$/.test(surnameInput.value);

	surnameError.style.display = isValid ? 'none' : 'block';
}

function validateAge() {
	const ageInput = document.getElementById('age');
	const ageError = document.getElementById('ageError');

	const isValid = /^[0-9]{1,3}$/.test(ageInput.value);

	ageError.style.display = isValid ? 'none' : 'block';
}

function validatePassword() {
	const passwordInput = document.getElementById('password');
	const passwordError = document.getElementById('passwordError');

	const isValid = passwordInput.value.length >= 8;

	passwordError.style.display = isValid ? 'none' : 'block';
}

function validateConfirmPassword() {
	const passwordInput = document.getElementById('password');
	const confirmPasswordInput = document.getElementById('confirmPassword');
	const confirmPasswordError = document.getElementById('confirmPasswordError');

	const isValid = passwordInput.value === confirmPasswordInput.value;

	confirmPasswordError.style.display = isValid ? 'none' : 'block';
}

document.getElementById('registrationForm').onsubmit = function () {
	validatePhone();
	validateName();
	validateSurname();
	validateAge();
	validatePassword();
	validateConfirmPassword();

	const errors = document.querySelectorAll('[id$="Error"]');
	return Array.from(errors).every((error) => error.style.display === 'none');
};
