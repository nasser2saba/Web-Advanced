export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');

  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'characterCard';

    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.status} - ${char.species}</p>
    `;

    grid.appendChild(card);
  });
}
