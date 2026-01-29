export function renderCharacters(characters) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = ''; // NU wel clearen (want we renderen filtered!)

  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'characterCard';

    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Gender: ${char.gender}</p>
    `;

    grid.appendChild(card);
  });
}
