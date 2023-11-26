document.addEventListener('DOMContentLoaded', () => {
  // Check if the login form exists on the page
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(loginForm);
      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': '',
        },
      });

      if (response.ok) {
        // Redirect to the dashboard or home page after successful login
        window.location.replace('/dashboard');
      } else {
        console.error('Login failed');
        // Display an error message to the user
      }
    });
  }

  // Check if the new post form exists on the page
  const newPostForm = document.getElementById('newPostForm');
  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(newPostForm);
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': '',
        },
      });

      if (response.ok) {
        // Redirect to the dashboard or home page after successful post creation
        window.location.replace('/dashboard');
      } else {
        console.error('Post creation failed');
        // Display an error message to the user
      }
    });
  }
});
