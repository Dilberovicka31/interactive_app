const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
    };

document.addEventListener('submit', signupFormHandler);