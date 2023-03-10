const icono = document.querySelector('#icono');
const video = document.querySelector('video');

icono.addEventListener('click',()=>{
    video.play();
    video.controls = false;
})