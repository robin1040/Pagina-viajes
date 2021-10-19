

//  codigo para slider de testimonios

const prev = document.querySelector('.prev');

const next = document.querySelector('.next');

const images = document.querySelector('.container-testimonios').children;

const totalImages = images.length;

let index = 0;

prev.addEventListener('click',() => {
    nextImage('next');
})

next.addEventListener('click',() => {
    nextImage('prev');
})

function nextImage(direccion){
    if(direccion == 'next'){
        index++;
        if(index == totalImages){
            index = 0;
        }
    }else{
        if (index == 0){
            index = totalImages -1;
        }else{
            index--;
        }
    }

    // colocamos images.length - 1 ára que no muestre el contenedor vacio
    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}


//Enviar formulario al correo

const $form = document.querySelector('#form');

$form.addEventListener('submit',enviarSubmit);

function enviarSubmit(event){

    event.preventDefault(); // previene que la pagina cargue despues de enviar un formulario

    const form = new FormData(this);

    console.log(form.get('name'));
}