const editPostForm = document.getElementById('editPostForm');
const deletePostButton = document.querySelector('.deleteBtn');
const postId = window.location.pathname.split('/').pop(); // Get post ID from URL
const editFormHandler = async (event) => {
  event.preventDefault();

  
  const title = document.getElementById('title').value.trim();
  const body = document.getElementById('body').value.trim();

  if (title && body && postId) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard'); // Redirect to dashboard after successful edit
      } else {
        alert('Failed to edit post');
      }
    } catch (error) {
      console.error('Error editing post:', error);
      alert('Failed to edit post');
    }
  } else {
    alert('Please fill out all fields');
  }
};

const deletePostHandler = async () => {
  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard'); // Redirect to dashboard after successful delete
    }
  }
  catch (error) {
    console.error('Error deleting post:', error);
    alert('Failed to delete post');
  }
}


if (editPostForm) {
  editPostForm.addEventListener('submit', editFormHandler);
}
deletePostButton.addEventListener('click', deletePostHandler);

