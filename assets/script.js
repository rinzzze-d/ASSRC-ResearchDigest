function handleScroll() {
    const nav = document.querySelector('nav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) { 
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', handleScroll);


function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 3;

  
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


function moveCarouselSection2(direction) {
    const carousel = document.getElementById('carouselTrack');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 1;

    
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


function moveCarouselSection3_1(direction) {
    const carousel = document.getElementById('carouselSection3_1');
    let cards = Array.from(carousel.children);
    const totalCards = cards.length;
    const visibleCards = 3;

    
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
