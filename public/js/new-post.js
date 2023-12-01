const newPostFormHandler = async function (event) {
  event.preventDefault();

  const body = document.querySelector(`textarea[name='post-body']`).value;
  const title = document.querySelector(`input[name='post-title']`).value;

  const response = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      body,
      title,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);