document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = validateForm();

        if (isValid) {
            const formData = {
                first_name: document.getElementById("firstName").value,
                last_name: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                phone_number: document.getElementById("phone").value,
                password: document.getElementById("password").value,
            };
            console.log(formData);
        }
    });

    function validateForm() {
        let isValid = true;

        // First Name
        const firstName = document.getElementById("firstName");
        const firstNameError = document.getElementById("firstNameError");
        if (firstName.value.trim() === "") {
            firstNameError.textContent = "First name is required.";
            isValid = false;
        } else {
            firstNameError.textContent = "";
        }

        // Last Name
        const lastName = document.getElementById("lastName");
        const lastNameError = document.getElementById("lastNameError");
        if (lastName.value.trim() === "") {
            lastNameError.textContent = "Last name is required.";
            isValid = false;
        } else {
            lastNameError.textContent = "";
        }

        // Email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Phone Number
        const phone = document.getElementById("phone");
        const phoneError = document.getElementById("phoneError");
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        // Password
        const password = document.getElementById("password");
        const passwordError = document.getElementById("passwordError");
        if (password.value.trim().length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        return isValid;
    }
});
