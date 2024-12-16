import Card from "../Card/Card.js";

const Carousel = ({ characters }) => {
    const carouselContainer = document.createElement("section");
    carouselContainer.className = "carousel-container";

    const prevButton = document.createElement("button");
    prevButton.className = "carousel-btn prev";
    prevButton.textContent = "<";

    const nextButton = document.createElement("button");
    nextButton.className = "carousel-btn next";
    nextButton.textContent = ">";

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    characters.forEach((character) => {
        const cardElement = Card({
            character,
            cardClass: "carouselCard",
            imgClass: "h-48",
            textClass: "",
        });
        carousel.appendChild(cardElement);
    });

    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(nextButton);

    return carouselContainer;
};

export default Carousel;
