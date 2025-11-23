function handleScroll() {
    const nav = document.querySelector('nav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) { // Threshold: Fix after scrolling 100px (adjust as needed)
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Function for section1 carousel (3 cards at a time with infinite loop)
function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 3;

    // Clone cards for infinite loop if not already done
    if (carousel.dataset.cloned !== 'true') {
        for (let i = 0; i < visibleCards; i++) {
            const clone = cards[i].cloneNode(true);
            carousel.appendChild(clone);
        }
        cards = Array.from(carousel.children);
        carousel.dataset.cloned = 'true';
    }

    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    currentIndex += direction;

    // Reset to start/end for infinite effect
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards * 2;
        carousel.style.transition = 'none'; // Disable transition for instant reset
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }

    const translateX = -currentIndex * (100 / visibleCards);
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;
}

// Function for section2 carousel (1 card at a time with infinite loop)
function moveCarouselSection2(direction) {
    const carousel = document.getElementById('carouselTrack');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 1;

    // Clone cards for infinite loop if not already done
    if (carousel.dataset.cloned !== 'true') {
        for (let i = 0; i < visibleCards; i++) {
            const clone = cards[i].cloneNode(true);
            carousel.appendChild(clone);
        }
        cards = Array.from(carousel.children);
        carousel.dataset.cloned = 'true';
    }

    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    currentIndex += direction;

    // Reset to start/end for infinite effect
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards * 2;
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }

    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;
}

// Function for section3_1 carousel (3 cards at a time with infinite loop)
function moveCarouselSection3_1(direction) {
    const carousel = document.getElementById('carouselSection3_1');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 3;

    // Clone cards for infinite loop if not already done
    if (carousel.dataset.cloned !== 'true') {
        for (let i = 0; i < visibleCards; i++) {
            const clone = cards[i].cloneNode(true);
            carousel.appendChild(clone);
        }
        cards = Array.from(carousel.children);
        carousel.dataset.cloned = 'true';
    }

    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    currentIndex += direction;

    // Reset to start/end for infinite effect
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards * 2;
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }

    const translateX = -currentIndex * (100 / visibleCards);
    carousel.style.transform = `translateX(${translateX}%)`;
    carousel.dataset.currentIndex = currentIndex;
}
