const input = {
    user: document.querySelector('#username'),
    passwordLogin: document.querySelector('#password-login'),
    email: document.querySelector('#email'),
    passwordRegister: document.querySelector('#password-register'),
    passwordConfirm: document.querySelector('#password-confirm')
    
}

const formLogin = document.querySelector('#formLogin')
const formRegister = document.querySelector('#formRegister')

function validateEmail(email) {
    const emailValue = email.value
    if(!emailValue.match(/\w{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        email.classList.add('invalid')
    }
    email.classList.add('sucess')
}

function validatePassword(password) {
    const pwd = password.value
    if (
        pwd.length < 8 || 
        !pwd.match(/[a-z]/) || 
        !pwd.match(/[A-Z]/) || 
        !pwd.match(/[0-9]/) ||
        !pwd.match(/[^a-zA-Z0-9\s]/)
    ) 
    {
        password.classList.add('invalid')
    }
    password.classList.add('sucess')
}

function passwordConfirmation(password) {
    const pwd = password.value
    if(pwd !== input.passwordRegister) {
        passwordConfirmation.classList.add('invalid')
    }
    passwordConfirmation.classList.add('sucess')
}

function resetClasss(input) {
    Object.entries(input).forEach(([key, value]) => {
        value.classList.remove('sucess', 'invalid')
    })
    
}

formLogin.addEventListener('submit', ev => {
    ev.preventDefault()
    resetClasss(input)
    validateEmail(input.user)
    validatePassword(input.passwordLogin)
})

formRegister.addEventListener('submit', ev => {
    ev.preventDefault()
    resetClasss(input)
    validateEmail(input.email)
    validatePassword(input.passwordRegister)
    validatePassword(input.passwordConfirm)
    passwordConfirmation()
})

document.querySelectorAll('#register-login').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.section-img').classList.toggle('active')
        formLogin.reset()
        formRegister.reset()
        resetClasss(input)
    })
})
