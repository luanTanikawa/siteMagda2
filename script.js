function abrirResposta(x) {
    let a = document.querySelectorAll('.duvidas-box-resposta')[x]

    if (a.style.display == '') {
        a.style.display = 'block'
    } else if (a.style.display == 'block') {
        a.style.display = ''
    }   
}


function abrirMenu () {

    let b = document.querySelector('.menu')
    if (b.style.display == '') {
        b.style.display = 'flex'

    } else if (b.style.display == 'flex') {
        b.style.display = ''
    }
}

function fecharMenu (x) {

    let b = document.querySelector('.menu')
    let c = document.querySelector('.menu nav')
    c.addEventListener('click', () => {
        b.style.display = ''
    })
}




    