const images = [
    './sunset-castle-of-Marvao.jpg',
    './taiwan-island.jfif',
    './mussender-temple.jfif'
];

let currentIndex = 0; // the current of the image
let img = document.querySelector('.js-img');
let next = document.querySelector('.js-next');
let prev = document.querySelector('.js-prev');

console.log(
    images[0]
);
// Helper functions
const incrementIndex = () => {
    currentIndex = currentIndex + 1;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }

    return currentIndex;
}

const decrementIndex = () => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    return currentIndex;
}


// Event Listeners
next.addEventListener('click', (event) => {
    img.setAttribute('src', images[incrementIndex(currentIndex)])
});

prev.addEventListener('click', (event) => {
    img.setAttribute('src', images[decrementIndex(currentIndex)])
});


