const swDisplay = document.querySelector('.swDisplay');

let swData = [];
const fetchData = async () => {
    await fetch('https://akabab.github.io/starwars-api/api/all.json')
    .then(res => res.json())
    .then((data) => {
        const fetches = data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                img: item.image,
                species: item.species,
                wiki: item.wiki
            };
        });
        swData = fetches;
        swCards('');
    });
};



const swCards = (all) => {
    const cards = swData
    .map((character) => {
        return `<div class="card">
        <p
        >#${character.id}</p>
        <h3 class="name_card">${character.name.toUpperCase()}</h3>
        <div>
            <img src="${character.img}" alt="${character.name}"/>
        </div>
        <div>
            <h3 class="species"> Species:  ${character.species}</h3>
            <p>
            <br>
<h3><a href="${character.wiki}" target="_blank" class="black-link">Star Wars Wikipedia</a></h3>            </p>
        </div>
        
        </div>`;
    })
    .join('');
    swDisplay.innerHTML = cards;
}

fetchData();