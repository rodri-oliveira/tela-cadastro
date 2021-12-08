let btnSenha = document.querySelector('.fa-eye')



btnSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    let inputConfirmarSenha = document.querySelector('#confirma-senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }

    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text')
    }else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
})

