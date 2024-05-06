const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#commentText').value.trim();
    const postId = document.querySelector('#postId').value; // Get the post ID from the hidden input field

    if (!commentText) {
        alert('Please enter a comment');
        return;
    }

    try {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId, // Pass the post ID along with the comment
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
    } catch (error) {
        console.error('Error creating comment:', error);
        alert('Failed to create comment');
    }
};

document.querySelector('.commentBtn').addEventListener('submit', commentFormHandler);
