const formRega = document.querySelector('.registration');
const formLogin = document.querySelector('.login');
const errRega = document.querySelector('.errRega');
const errLogin = document.querySelector('.errLogin');

if (formRega) {
  formRega.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, password, email, password2, method,
    } = e.target;
    if (password.value.length < 8) {
      errRega.innerHTML = 'Пароль должен быть больше 8 символов';
    } else if (password.value === password2.value) {
      const res = await fetch('/api/auth/registration', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name.value,
          password: password.value,
          email: email.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'ok') {
        window.location.assign('/');
      } else {
        errRega.innerHTML = data.message;
      }
    } else {
      errRega.innerHTML = 'Ваши пароли не совпадают';
    }
  });
}
if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      password, email, method, action,
    } = e.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      errLogin.innerHTML = data.message;
    }
  });
}
