const email = document.getElementById('email');
const password = document.getElementById('password');

const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
        email: email.value,
        password: password.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
    }

    
    document.addEventListener('submit', loginFormHandler);