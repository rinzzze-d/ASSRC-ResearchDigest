// Existing function for section1 carousel (3 cards at a time with hover scale)
function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const cards = carousel.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards visible at once
    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * (100 / visibleCards);
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;
}

// Function for section2 carousel (1 card at a time)
function moveCarouselSection2(direction) {
    const carousel = document.getElementById('carouselTrack');
    const cards = carousel.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 1; // Show 1 card at a time
    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * 100; // Move by 100% for one card
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;
}

// Function for section3 carousel (1 card at a time with constant middle scaling)
function moveCarouselSection3_1(direction) {
    const carousel = document.getElementById('carouselSection3_1');
    const cards = carousel.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 1; // Show 1 card at a time
    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;

    // Update middle card class (since it's 1 card, the visible one is always "middle")
    cards.forEach(card => card.classList.remove('middle-card'));
    if (cards[currentIndex]) {
        cards[currentIndex].classList.add('middle-card');
    }
}