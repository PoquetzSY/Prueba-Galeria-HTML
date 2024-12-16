const Card = ({ character, cardClass = "", imgClass = "", textClass = "" }) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = `card ${cardClass}`;

    const img = document.createElement("img");
    img.className = `imageCard ${imgClass}`;
    img.src = character.image;
    img.alt = character.name;

    cardDiv.appendChild(img);

    const contentDiv = document.createElement("div");
    contentDiv.className = "p-4";

    const title = document.createElement("h2");
    title.className = `${textClass} textBrownDark`;
    title.textContent = character.name;

    const paragraph = document.createElement("p");
    paragraph.className = `${textClass} textGray`;
    paragraph.textContent = `${character.species} - ${character.status}`;

    contentDiv.appendChild(title);
    contentDiv.appendChild(paragraph);

    cardDiv.appendChild(contentDiv);

    return cardDiv;
};

export default Card;
