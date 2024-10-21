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

     // Create a new comment by reusing the structure of existing comments
     const newComment = document.createElement('div');
     newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
     newComment.innerHTML = `
       <div class="flex-1 py-10 border-t border-gray-200">
         <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
         <div class="prose prose-sm mt-4 max-w-none text-gray-500">
           <p>${message}</p>
         </div>
       </div>
     `;

     // Append the new comment to the comment list
    commentList.appendChild(newComment);

    // Reset the form fields
    document.querySelector('form').reset();
});
