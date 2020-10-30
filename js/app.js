const menuMovil = document.querySelector('.menu-movil');
const menu = document.querySelector('.menu');
const btnUp = document.querySelector('.ir-arriba');
const queHacemos = document.querySelector('#secc-que-hacemos');
const servicios = document.querySelector('#secc-servicios');
const trabajos = document.querySelector('#secc-trabajos');
const porque = document.querySelector('#secc-porque');
const contact = document.querySelector('#secc-contacto');
let desplegado = true;

window.addEventListener('load', () => {
    eventosPagina();
});

function eventosPagina() {
    menu.addEventListener('click', desplegarMenu);
    menuMovil.addEventListener('click', desplegarMenu);
    btnUp.addEventListener('click', irArriba);
    queHacemos.addEventListener('click', moveTo);
    servicios.addEventListener('click', moveTo);
    trabajos.addEventListener('click', moveTo);
    porque.addEventListener('click', moveTo);
    contact.addEventListener('click', moveTo);
}

function irArriba() {
    let posicion = document.documentElement.scrollTop;

    if (posicion > 0) {
        window.requestAnimationFrame(irArriba);
        window.scrollTo(0, posicion - (posicion / 10));
    }
}

function moveTo(e) {
    const destino = e.target.hash;
    console.log(destino);
    $("html, body").animate({
        scrollTop: $(destino).offset().top
    }, 1000);
    location.hash = destino;
}

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
        btnUp.style.transform = "scale(1)";
    } else if (scroll < 1) {
        btnUp.style.transform = "scale(0)";
    }
}

function desplegarMenu() {
    const icono = document.querySelector('#icono-menu');
    icono.classList.remove('fa-bars');
    icono.classList.add('fa-times', 'rotate');

    if (desplegado) {
        menu.style.left = '0';
        desplegado = false;
    } else {
        desplegado = true;
        menu.style.left = '-100%';
        icono.classList.remove('fa-times', 'rotate');
        icono.classList.add('fa-bars')
    }
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});