const postId = document.querySelector(`input[name'post-id']`).value;

const editFormHandler = async (event) => {
  event.preventDefault();

  const postBody = document.querySelector(`input[name='post-body']`).value.trim();
  const title = document.querySelector(`input[name='post-title']`).value.trim();

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      postBody,
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

const deleteHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-button').addEventListener('click', deleteHandler);