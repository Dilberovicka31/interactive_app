const title = document.querySelector('#title').value;
const body = document.querySelector('#body').value;

const newFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create post');
    }
}

document
    .querySelector('.newPost')
    .addEventListener('submit', newFormHandler);
