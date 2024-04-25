const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the email value from the form
  const email = document.getElementById('email').value;

  try {
    // Send a POST request to the server with the email
    const response = await fetch('api/users/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    // Display success or error message based on the response
    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Failed to send reset email:', error);
    alert('Failed to send reset email. Please try again later.');
  }
});



