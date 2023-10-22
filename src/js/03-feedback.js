import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveToLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

const throttledSaveToLocalStorage = throttle(saveToLocalStorage, 500);

emailInput.addEventListener('input', throttledSaveToLocalStorage);
messageInput.addEventListener('input', throttledSaveToLocalStorage);

loadFromLocalStorage();

form.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
});
