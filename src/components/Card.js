const Card = ({ character, cardClass = "", imgClass = "", textClass = "" }) => {
    return `
        <div class="card ${cardClass}">
            <img class="imageCard ${imgClass}" src="${character.image}" alt="${character.name}">
            <div class="p-4">
                <h2 class="${textClass} textBrownDark">${character.name}</h2>
                <p class="${textClass} textGray">${character.species} - ${character.status}</p>
            </div>
        </div>
    `;
};

export default Card;
