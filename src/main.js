import ApiService from "./Service/ApiService.js";
import Grid from "./components/Grid/Grid.js";
import setupCarousel from "./components/Carousel/SetupCarousel.js";
import Carousel from "./components/Carousel/Carousel.js";
import Footer from "./components/Footer/Footer.js";

const App = document.getElementById("app");

const apiService = new ApiService();

let isLoading = false;

let characters = [];
const render = () => {
    App.textContent = "";

    const title = document.createElement("h1");
    title.textContent = "Galería Rick & Morty";
    App.appendChild(title);

    if (isLoading) {
        const loadingDiv = document.createElement("div");
        loadingDiv.id = "loading";
        loadingDiv.className = "loading";
        loadingDiv.textContent = "Loading…";
        App.appendChild(loadingDiv);
        return;
    }

    const carouselElement = Carousel({ characters }); 
    App.appendChild(carouselElement);
    setupCarousel(carouselElement, characters.length);

    const gridElement = Grid({ characters });
    App.appendChild(gridElement);


    const footerElement = document.createElement("footer");
    footerElement.innerHTML = Footer();
    App.appendChild(footerElement);
};

const onMount = async () => {
    try {
        isLoading = true;
        render();
        const response = await apiService.getCharacters();
        characters = response.results;
    } catch (error) {
        alert("Error al cargar los personajes", error);
    } finally {
        isLoading = false;
        render();
    }
};

onMount();