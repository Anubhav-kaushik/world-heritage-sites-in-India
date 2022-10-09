function createInfoCard(numbering, title, year, state, imageUrl, unescoUrl, category) {
    const infoCard = document.createElement('div');
    infoCard.classList.add('site-info-card');
    infoCard.dataset.category = category;
    infoCard.id = `info-card-${numbering}`;
    infoCard.style.backgroundImage = `url(images/${imageUrl})`;
    infoCard.addEventListener('click', function () {
        window.open(unescoUrl, '_blank');
    });

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('site-image');
    // imageContainer.style.backgroundImage = `url(images/${imageUrl})`;
    infoCard.appendChild(imageContainer);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('site-info');

    const titleContainer = document.createElement('h2');
    titleContainer.classList.add('site-name');
    titleContainer.innerText = title;
    infoContainer.appendChild(titleContainer);

    const yearContainer = document.createElement('p');
    yearContainer.classList.add('year-of-recognition');
    yearContainer.innerHTML = `<strong>${year}</strong>`;
    infoContainer.appendChild(yearContainer);

    const stateContainer = document.createElement('p');
    stateContainer.classList.add('state');
    stateContainer.innerText = state;
    infoContainer.appendChild(stateContainer);

    infoCard.appendChild(infoContainer);

    const numberingContainer = document.createElement('div');
    numberingContainer.classList.add('numbering');
    numberingContainer.innerText = numbering;
    infoCard.appendChild(numberingContainer);

    console.log(infoCard);
    return infoCard;
}

function addCardToDom(infoCard, containerSelector) {
    const siteContainer = document.querySelector(containerSelector);
    siteContainer.appendChild(infoCard);
}

function createInfoCards(data, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    for (let i in data) {
        const infoCard = createInfoCard(i, data[i].name, data[i].yor, data[i].state, data[i].image, data[i].unescoUrl, data[i].category);
        addCardToDom(infoCard, containerSelector);
    }
}

createInfoCards(heritageData, '.main-container');