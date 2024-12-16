import Card from "../Card/Card.js";

const Carousel = ({ characters }) => {
    return `<section class="carousel-container">
        <button class="carousel-btn prev">&lt;</button>
        <div class="carousel">
        ${characters
            .map((character) =>
                Card({
                    character,
                    cardClass: "carouselCard",
                    imgClass: "h-48",
                    textClass: "",
                })
            )
            .join("")}
        </div>
        <button class="carousel-btn next">&gt;</button>
    </section>`;
};

export default Carousel;
