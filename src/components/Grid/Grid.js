import Card from "../Card/Card.js";

const Grid = ({ characters }) => {
    const gridSection = document.createElement("section");
    gridSection.className = "grid";

    characters.forEach((character) => {
        const cardElement = Card({
            character,
            cardClass: "gridCard",
            imgClass: "h-64",
            textClass: "textGrid",
        });

        gridSection.appendChild(cardElement);
    });

    return gridSection;
};

export default Grid;
