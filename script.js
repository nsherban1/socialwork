const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

/**
 * Updates the slider position and adjusts the container height
 */
function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Optional: adjust slider height to match current slide
  const currentSlideHeight = slides[currentIndex].offsetHeight;
  slidesContainer.parentElement.style.height = currentSlideHeight + 'px';
}

/**
 * Show previous slide
 */
function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

/**
 * Show next slide
 */
function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

// Event listeners
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Optional: keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Initialize slider
updateSlider();
