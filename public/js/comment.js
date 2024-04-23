
let commentText = document.querySelector('commentText');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#commentText').value.trim();

    if (!commentText) {
        alert('Please enter a comment');
        return;
    }

    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
            comment_text: commentText,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log('Comment created');
        document.location.reload();
    } else {
        alert('Failed to create comment');
    }
}

document
    .querySelector('.commentBtn')
    .addEventListener('submit', commentFormHandler);