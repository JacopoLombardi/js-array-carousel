
// Array con i percorsi delle immagini
const images = [
   'img/01.webp',
   'img/02.webp',
   'img/03.webp',
   'img/04.webp',
   'img/05.webp',
];

// variabili di Js collegate all'HTML
const boxImages = document.querySelector('.box_images');


for( let i = 0; i < images.length; i++){

   let counterImg = images[i];
   boxImages.innerHTML += `<img class="d-none" src="${counterImg}" alt="">`;
}






