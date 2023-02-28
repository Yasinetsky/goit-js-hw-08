// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form  textarea'),
// };

// const STORAGE_KEY = 'feedback-form-state';

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// onTextareaOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onTextareaOutput() {
//   const saveMassage = localStorage.getItem(STORAGE_KEY);
//   if (saveMassage) {
//     console.log(saveMassage);
//     refs.textarea.value = saveMassage;
//   }
// }

//
// refs.form.addEventListener('submit', onFormSubmit);

import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
onTextareaOutput();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  console.log(evt.target.name);
  console.log(evt.target.value);

  formData[evt.target.name] = evt.target.value;

  console.log(formData);
}
//    const message = evt.target.email;
//   localStorage.setItem(STORAGE_KEY, message);
// }

function onTextareaOutput() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);
  if (saveMassage) {
    console.log(saveMassage);
    refs.textarea.value = saveMassage;
  }
}
