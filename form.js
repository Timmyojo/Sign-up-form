const patterns = {
    fname: /^[a-z]{3,}$/i,
    lname: /^[a-z]{3,}$/i,
    email: /^([a-z\.-]+)@([a-z\.-]+)\.([a-z]{2,9})([\.a-z]{2,9})?$/,
    phone: /^[\d]{11}$/,
    password1: /^[a-z\d@\._-]{5,12}$/,
    password2: /^[a-z\d@\._-]{5,12}$/


}


function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'pass';
    } else {
        field.className = 'error';
    }
    
}


const inputs = document.querySelectorAll('input');


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.name])
    })
})

const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');

pass2.addEventListener('keyup', (e) => {
    if (pass1.value !== pass2.value) {
        pass2.classList.add('error')
    }
})