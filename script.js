let btnSenha = document.querySelector('#verSenha')
let btnConfirmaSenha = document.querySelector('#verConfirmaSenha')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let tel = document.querySelector('#tel')
let labelTel = document.querySelector('#labelTel')
let validTel = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmaSenha = document.querySelector('#confirmaSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

function cadastrar() { // valida se campos preenchidos corretamente
    if (validNome && validUsuario && validEndereco && validEmail 
            && validTel && validSenha && validConfirmarSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCadastro: nome.value,
                usuarioCadastro: usuario.value,
                enderecoCadastro: endereco.value,
                emailCadastro: email.value,
                telCadastro: tel.value,
                senhaCadstro: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando Usuario...</strong>'
        msgError.setAttribute('style', 'display: none')

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/index.html'// abre a tela de login
        }, 3000)

    }else {
        msgError.setAttribute('style', 'display: block'),
        msgError.innerHTML = '<strong>Preencher todos os campos !!</strong>'
    }
        
        
         
        
        
     
}
nome.addEventListener('keyup', () => { // valida campo por campo 
    return nome.value.length <= 2 ?
        (
            labelNome.setAttribute('style', 'color: red'),
            labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres*' ,
            nome.setAttribute('style', 'border-color:red'),
            validNome = false
        )
        

        : (
            labelNome.setAttribute('style', 'color: green'),
            labelNome.innerHTML = 'Nome' ,
            nome.setAttribute('style', 'border-color:green'), 
            validNome = true 
        )
})

nome.addEventListener('keyup', () => { 
    if (nome.value === ''){
        labelNome.setAttribute('style' , 'color: #122887')
        labelNome.innerHTML = 'Nome' ,
        nome.setAttribute('style', 'border-color:#122887')
    }
})

usuario.addEventListener('keyup', () => {// valida campo por campo
    return usuario.value.length <= 4 ?
        (
            labelUsuario.setAttribute('style', 'color: red'),
            labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres*' ,
            usuario.setAttribute('style', 'border-color:red'),
            validUsuario = false
        )
        

        : (
            labelUsuario.setAttribute('style', 'color: green'),
            labelUsuario.innerHTML = 'Usuario' ,
            usuario.setAttribute('style', 'border-color:green'),
            validUsuario = true
        )
})

usuario.addEventListener('keyup', () => {
    if (usuario.value === ''){
        labelUsuario.setAttribute('style' , 'color: #122887')
        labelUsuario.innerHTML = 'Usuario' ,
        usuario.setAttribute('style', 'border-color:#122887')
    }
})

endereco.addEventListener('keyup', () => { // valida campo por campo
    return endereco.value.length <= 9 ?
        (
            labelEndereco.setAttribute('style', 'color: red'),
            labelEndereco.innerHTML = 'Endereco *Insira no minimo 10 caracteres*' ,
            endereco.setAttribute('style', 'border-color:red'),
            validEndereco = false
        )
        

        : (
            labelEndereco.setAttribute('style', 'color: green'),
            labelEndereco.innerHTML = 'Endereco' ,
            endereco.setAttribute('style', 'border-color:green'),
            validEndereco = true
        )
})

endereco.addEventListener('keyup', () => {
    if (endereco.value === ''){
        labelEndereco.setAttribute('style' , 'color: #122887')
        labelEndereco.innerHTML = 'Endereco' ,
        endereco.setAttribute('style', 'border-color:#122887')
    }
})

email.addEventListener('keyup', () => { 
    return email.value.length <= 9 ?
        (
            labelEmail.setAttribute('style', 'color: red'),
            labelEmail.innerHTML = 'email *Insira no minimo 10 caracteres*' ,
            email.setAttribute('style', 'border-color:red'),
            validEmail = false
        )
        

        : (
            labelEmail.setAttribute('style', 'color: green'),
            labelEmail.innerHTML = 'email' ,
            email.setAttribute('style', 'border-color:green'),
            validEmail = true
        )
})

email.addEventListener('keyup', () => {
    if (email.value === ''){
        labelEmail.setAttribute('style' , 'color: #122887')
        labelEmail.innerHTML = 'Email' ,
        email.setAttribute('style', 'border-color:#122887')
    }
})

tel.addEventListener('keyup', () => {
    return tel.value.length <= 9 ?
        (
            labelTel.setAttribute('style', 'color: red'),
            labelTel.innerHTML = 'Tel *Insira no minimo 10 caracteres*' ,
            tel.setAttribute('style', 'border-color:red'),
            validTel = false
        )
        

        : (
            labelTel.setAttribute('style', 'color: green'),
            labelTel.innerHTML = 'tel' ,
            tel.setAttribute('style', 'border-color:green'),
            validTel = true
        )
})

tel.addEventListener('keyup', () => {
    if (tel.value === ''){
        labelTel.setAttribute('style' , 'color: #122887')
        labelTel.innerHTML = 'Tel' ,
        tel.setAttribute('style', 'border-color:#122887')
    }
})

senha.addEventListener('keyup', () => {
    return senha.value.length <= 5 ?
        (
            labelSenha.setAttribute('style', 'color: red'),
            labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres*' ,
            senha.setAttribute('style', 'border-color:red'),
            validSenha = false
        )
        

        : (
            labelSenha.setAttribute('style', 'color: green'),
            labelSenha.innerHTML = 'Senha' ,
            senha.setAttribute('style', 'border-color:green'),
            validSenha = true
        )
})

senha.addEventListener('keyup', () => {
    if (senha.value === ''){
        labelSenha.setAttribute('style' , 'color: #122887')
        labelSenha.innerHTML = 'Senha' ,
        senha.setAttribute('style', 'border-color:#122887')
    }
})



confirmaSenha.addEventListener('keyup', () => {
    return (confirmaSenha.value != senha.value) ?
        (
            labelConfirmarSenha.setAttribute('style', ('color: red')),
            labelConfirmarSenha.innerHTML = 'Confirmar Senha *As senhas não conferem*' ,
            confirmaSenha.setAttribute('style', 'border-color:red'),
            validConfirmarSenha = false
        )
        

        : (
            labelConfirmarSenha.setAttribute('style', 'color: green'),
            labelConfirmarSenha.innerHTML = 'Confirmar Senha' ,
            confirmaSenha.setAttribute('style', 'border-color:green'),
            validConfirmarSenha = true
        )
})

confirmaSenha.addEventListener('keyup', () => {
    if (confirmaSenha.value === ''){
        labelConfirmarSenha.setAttribute('style' , 'color: #122887')
        labelConfirmarSenha.innerHTML = 'Senha' ,
        confirmaSenha.setAttribute('style', 'border-color:#122887')
    }
})



btnSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')


    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirmaSenha.addEventListener('click', () => {
    let inputConfirmarSenha = document.querySelector('#confirmaSenha')

    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text')
    } else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
})

