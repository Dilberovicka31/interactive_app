const newFormHandler = async (event) => {
    event.preventDefault();

    // Grab values from input fields inside the event handler
    const titleEl = document.querySelector('#title').value.trim();
    const bodyEl = document.querySelector('#body').value.trim();

    // Add constraints to the title and body to make sure they're not empty
    if (!titleEl || !bodyEl) {
        alert('Please enter a title and body for your post');
        return;
    }

    // Send a POST request to create a new post
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: titleEl, // Corrected variable names here
            body: bodyEl,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Check the response status
    if (response.ok) {
        console.log('Post created');
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create post');
    }
}

document
    .querySelector('#newPost')
    .addEventListener('submit', newFormHandler);
