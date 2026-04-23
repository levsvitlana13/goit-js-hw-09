const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
});
