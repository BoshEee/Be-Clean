const slideContainer = document.querySelector('.slideshow');
var index = 1;

function slideshow() {
  if (index >= 9) {
    index = 1;
  } else {
    slideContainer.src = `../assets/${index}.jpg`;
    index++;
  }
}
setInterval(slideshow, 3000);
