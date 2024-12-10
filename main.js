document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success_message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Hide previous error messages
        const errorMessages = form.querySelectorAll('.text-customRed');
        errorMessages.forEach(msg => msg.classList.add('hidden'));

        let isValid = true;

        // Validate name (letters only)
        const nameInput = document.getElementById('name');
        const nameRegex = /^[A-Za-z\s]+$/; // Regex for letters only
        if (!nameInput.value.trim() || !nameRegex.test(nameInput.value)) {
            isValid = false;
            nameInput.nextElementSibling.classList.remove('hidden');
            nameInput.nextElementSibling.textContent = "Name must contain letters only.";
        }

        // Validate phone number (exactly 11 digits)
        const phoneInput = document.getElementById('phone_number');
        const phoneRegex = /^\d{11}$/;
        if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value)) {
            isValid = false;
            phoneInput.nextElementSibling.classList.remove('hidden');
            phoneInput.nextElementSibling.textContent = "Phone number must be exactly 11 digits.";
        }

        // Validate gender
        const genderSelect = document.getElementById('gender');
        if (!genderSelect.value) {
            isValid = false;
            document.getElementById('genderError').classList.remove('hidden');
        }

        // Validate password
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm_password');
        if (!passwordInput.value.trim() || passwordInput.value.length < 6) {
            isValid = false;
            passwordInput.nextElementSibling.classList.remove('hidden');
            passwordInput.nextElementSibling.textContent = "Password must be at least 6 characters long.";
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            confirmPasswordInput.nextElementSibling.classList.remove('hidden');
            confirmPasswordInput.nextElementSibling.textContent = "The passwords do not match.";
            confirmPasswordInput.nextElementSibling.classList.remove('hidden');
        }

        // If all validations pass
        if (isValid) {
            successMessage.classList.remove('hidden');
            successMessage.classList.add('flex');

            // Collect form data and log it
            const formData = {
                name: nameInput.value,
                phone_number: phoneInput.value,
                gender: genderSelect.value,
                password: passwordInput.value,
                newsletter: document.getElementById('newsletter').checked
            };
            console.log(formData); 
            form.reset();
        }
    });
});