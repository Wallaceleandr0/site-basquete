function abrirMenu () {
    document.getElementById('menu').style.width = '250px'
    document.querySelector('.hamburguer').style.display = 'none'
    document.querySelector('.hamburguer-2').style.display = 'block'
}

function fecharMenu () {
    document.getElementById('menu').style.width = '0px'
    document.querySelector('.hamburguer').style.display = 'block'
    document.querySelector('.hamburguer-2').style.display = 'none'
}