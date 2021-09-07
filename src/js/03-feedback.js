import throttle from '../../node_modules/lodash/throttle';

const form = document.querySelector(".feedback-form");

function formInput(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
  let object = {email:`${email.value}`, message:`${message.value}`}
  localStorage.setItem("feedback-form-state",JSON.stringify(object))
}
form.addEventListener("input", throttle(formInput,500));
const savedSettings = localStorage.getItem("feedback-form-state")
try {
  let parsedSettings = JSON.parse(savedSettings);
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
} catch (error) {
  console.log(`Błąd ${error.name}`)
}
function formSubmit(event){
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
  let object = {email:`${email.value}`, message:`${message.value}`}
  console.log(object)
  localStorage.clear();
  event.currentTarget.reset();
}
form.addEventListener("submit", formSubmit);