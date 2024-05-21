// Assume you have an HTML form with input fields for first name, last name, email, and mobile
// Make sure to add IDs to your input fields (e.g., id="first_name", id="last_name", etc.)

// Get references to the input fields
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

// Example: Validate email format
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Example: Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const mobile = mobileInput.value;

    // Validate input (you can add more validation logic)
    if (!firstName || !lastName || !validateEmail(email) || !mobile) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Assuming you want to send this data to a server (backend) via AJAX or fetch API
    // Replace the following lines with your actual API call
    const userData = {
        firstName,
        lastName,
        email,
        mobile,
    };

    // Example: Send data to the server
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('User data saved:', data);
            // Handle success (e.g., show a success message to the user)
        })
        .catch(error => {
            console.error('Error saving user data:', error);
            // Handle error (e.g., show an error message to the user)
        });
}

// Attach the submit event listener to your form
const userForm = document.querySelector('form'); // Adjust the selector as needed
userForm.addEventListener('submit', handleSubmit);

