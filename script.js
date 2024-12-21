let currentSlideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');

    // Update current slide index
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;

    // Show new slide
    slides[currentSlideIndex].classList.add('active');

    // Move slides container
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}