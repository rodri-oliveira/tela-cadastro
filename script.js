let btnSenha = document.querySelector('#verSenha')
let btnConfirmaSenha = document.querySelector('#verConfirmaSenha')



btnSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirmaSenha.addEventListener('click', () => {
    let inputConfirmarSenha = document.querySelector('#confirma-senha')

    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text')
    }else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
})

