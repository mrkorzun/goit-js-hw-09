const refs = {
  form: document.querySelector('.feedback-form'),
  btn: document.querySelector('.btn'),
};
console.log(refs);

const formData = {
  email: '',
  message: '',
};

function onFormFieldChange({ target: formFieldEl }) {
  console.log(formFieldEl);
}

refs.form.addEventListener('input', onFormFieldChange);
