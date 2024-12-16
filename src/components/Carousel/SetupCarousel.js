const setupCarousel = (carouselContainer, totalCards) => {
    const carousel = carouselContainer.querySelector(".carousel");
    const nextBtn = carouselContainer.querySelector(".carousel-btn.next");
    const prevBtn = carouselContainer.querySelector(".carousel-btn.prev");
    const cardWidth = carousel.querySelector(".card").offsetWidth + 16;

    const firstCards = carousel.innerHTML;
    carousel.innerHTML = firstCards + carousel.innerHTML + firstCards;

    let currentIndex = totalCards;

    const updateCarousel = () => {
        const screenWidth = window.innerWidth;
        let visibleCards = 1;

        if (screenWidth >= 1024) {
            visibleCards = 5;
        } else if (screenWidth >= 768) {
            visibleCards = 3;
        }

        const totalOffset = ((visibleCards - 1) / 2) * cardWidth;
        const offset = -(currentIndex * cardWidth - totalOffset);

        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(${offset}px)`;
    };

    const moveToIndex = (index) => {
        currentIndex = index;
        updateCarousel();

        setTimeout(() => {
            if (index >= totalCards * 2) {
                currentIndex = totalCards;
                carousel.style.transition = "none";
                updateCarousel();
            } else if (index < totalCards) {
                currentIndex = totalCards + totalCards - 1;
                carousel.style.transition = "none";
                updateCarousel();
            }
        }, 500);
    };

    nextBtn.addEventListener("click", () => moveToIndex(currentIndex + 1));
    prevBtn.addEventListener("click", () => moveToIndex(currentIndex - 1));

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
};

export default setupCarousel;
