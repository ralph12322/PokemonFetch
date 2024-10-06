async function fetchPokemon() {
    const pokemon = document.getElementById('searchPokemon').value;
    try {
        const tableBody = document.getElementById('imageTableBody');
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        
        if (!response.ok) {
            tableBody.innerHTML='';
            alert("There's no such Pokemon")
            throw new Error('Network response was not ok');
            
        }
        const data = await response.json();


        const pokemonName = data.name;
        const imageUrl = data.sprites.front_default; 


        
        const img = document.createElement('img');
        const row = document.createElement('tr');
        const description = document.createElement('td');
        description.textContent = `${pokemonName}s Weight is ${data.weight}
        and Height is ${data.height}`;

        tableBody.innerHTML = '';
        img.src = imageUrl;
        img.alt = `${pokemonName} image`;
        img.style.width = '200px'; 
        row.appendChild(description)
        row.appendChild(img)
        tableBody.appendChild(row);
        console.log(data)

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
