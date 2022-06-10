const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        return alert('Всі поля мають бути заповнені');
    } else {
        const formData = { mail, password };
        event.currentTarget.reset();
        console.log(formData);
    }; 
}
