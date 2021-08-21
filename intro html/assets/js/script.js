let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtN = document.querySelector('#txtNome')

    if(nome.value.length < 3) {
        txtN.innerHTML = 'Vish, nome inválido (ás vezes eu também esqueço o meu)'
        txtN.style.color = 'orange'
    } else {
        txtN.innerHTML = ' '
        nomeOk = true
    }
}

function validaEmail() {
    let txtE = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtE.innerHTML = "E-mail inválido chefe, cuidado pra não cair na caixa de spam..."
        txtE.style.color = 'orange'
    } else {
        txtE.innerHTML = " "
        emailOk = true
    } 
}

function validaAssunto() {
    let txtA = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtA.innerHTML = 'Eita que textão! O máximo permitido é de 100 caracteres...'
        txtA.style.color = 'orange'
    } else {
        txtA.innerHTML = " "
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Pix... digo, formulário enviado com sucesso!')
    } else {
        alert ('Ops, que feio servidor! Parece que você esqueceu alguma coisa, preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}