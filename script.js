let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

function ProxSlide(){
    if(document.querySelector('.slider--width').classList.contains('slide1')){
        
        document.querySelector('.slider--width').classList.remove('slide1');
        document.querySelector('.slider--width').classList.add('slide2');

    } else if(document.querySelector('.slider--width').classList.contains('slide2')){

        document.querySelector('.slider--width').classList.remove('slide2');
    } else {
        document.querySelector('.slider--width').classList.add('slide1');
    }
}

setInterval(ProxSlide, 3000);