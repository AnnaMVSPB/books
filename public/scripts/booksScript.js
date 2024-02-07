const formAdd = document.querySelector('.addBook');
const booksList = document.querySelector('.booksList');
const formUpdate = document.querySelector('.updateBook');

if (formAdd) {
  formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      title, description, img, author, genreId,
    } = e.target;
    const formData = new FormData();
    const picturesData = [...img.files];
    picturesData.forEach((url) => {
      formData.append('url', url);
    });
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('author', author.value);
    formData.append('genreId', genreId.value);
    const res = await fetch('/api/books', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    e.target.reset();
    if (data.message === 'ok') {
      booksList.insertAdjacentHTML('beforeend', data.html);
      document.querySelector('.errBooks').innerHTML = '';
    } else {
      document.querySelector('.errBooks').innerHTML = data.message;
    }
  });
}

if (booksList) {
  booksList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteBook')) {
      const del = confirm('Вы точно хотите удалить');
      if (del) {
        const cardBook = e.target.closest('.bookCard');
        const { id } = cardBook.dataset;
        const res = await fetch(`/api/books/${id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.message === 'ok') {
          cardBook.remove();
        }
      }
    }
  });
}
if (formUpdate) {
  formUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      title, description, img, author, genreId,
    } = e.target;
    const { id } = e.target.dataset;
    const res = await fetch(`/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        img: img.value,
        author: author.value,
        genreId: genreId.value,
      }),
    });
    const data = await res.json();
    if (('data' in data) && data.data[0]) {
      window.location.assign('/books');
    } else if ('message' in data) {
      document.querySelector('.errBooksUpdate').innerHTML = data.message;
    } else {
      document.querySelector('.errBooksUpdate').innerHTML = 'извините сервер временно не доступен';
    }
  });
}
