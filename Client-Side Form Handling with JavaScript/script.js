const registrationForm = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form field values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Clear previous error messages
  errorMessages.innerHTML = "";

  // Perform form validation
  if (!username.trim()) {
    displayError("Username is required.");
    return;
  }

  if (!email.trim() || !isValidEmail(email)) {
    displayError("Please enter a valid email address.");
    return;
  }

  if (!password.trim() || !isStrongPassword(password)) {
    displayError(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
    return;
  }

  // If validation passes, submit the form (in a real scenario, this could be an AJAX call to the server)
  alert("Registration successful!");
  registrationForm.reset(); // Clear form fields
});

function displayError(message) {
  const errorMessage = document.createElement("div");
  errorMessage.className = "error";
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return pattern.test(password);
}
