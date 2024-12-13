import ApiService from "./src/Service/ApiService.js";
import Card from "./src/components/Card.js";
import Carousel from "./src/components/Carousel.js";
import Footer from "./src/components/Footer.js";

const App = document.getElementById("app");

const apiService = new ApiService();

let isLoading = false;

let characters = [];
const render = () => {
    console.log("Render function called");
    App.innerHTML = `
        <h1>Galeria Rick & Morty</h1>
        ${
            isLoading
                ? `<div id="loading" class="loading">Loading&#8230;</div>`
                : `
                    <div>
                      ${Carousel({ characters })}
                      <div class="grid">
                      ${characters
                          .map((character) =>
                              Card({
                                  character,
                                  cardClass: "gridCard",
                                  imgClass: "h-64",
                                  textClass: "textGrid",
                              })
                          )
                          .join("")}
                      </div>
                    </div>
                `
        }
        ${Footer()}
    `;
};

let currentIndex = 0;

const setupCarousel = () => {
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const cardWidth = carousel.querySelector(".card").offsetWidth + 16;
    const totalCards = characters.length;

    const firstCards = carousel.innerHTML;
    const lastCards = carousel.innerHTML;
    carousel.innerHTML = lastCards + carousel.innerHTML + firstCards;

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
                currentIndex = totalCards + totalCards - visibleCards;
                carousel.style.transition = "none";
                updateCarousel();
            }
        }, 500);
    };

    nextBtn.addEventListener("click", () => {
        moveToIndex(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        moveToIndex(currentIndex - 1);
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
};

const onMount = async () => {
    try {
        isLoading = true;
        console.log(isLoading);
        const response = await apiService.getCharacters();
        characters = response.results;
        console.log(characters);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Finally");
        isLoading = false;
        console.log(isLoading);
    }

    render();
    setupCarousel();
};

onMount();
