// Listen for a click event on the submit button inside the form
document.querySelector('form button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');

    // Check if any of the fields are empty
    if (!firstName || !lastName || !message) {
      errorMessage.style.display = 'block'; // Show the error message if any field is empty
      return;
    }

    // Hide the error message if all fields are filled
    errorMessage.style.display = 'none';
});
