document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button').addEventListener('click', function() {
        var idPokemon = parseInt(document.getElementById('id').value);
        var nomPokemon = document.getElementById('nom').value;
        var typePokemon = document.getElementById('type').value;
        document.getElementById('pokemon').innerHTML = "";

        fetch('pokemon.json')
        .then(function(reponse){
            return reponse.json();
        })
        .then(function(data){
            var pokemonFound = false;
            for (const element of data) {
                if (element.id === idPokemon && element.name.french === nomPokemon) {
                    var paragraph = document.createElement('p class="pokemon');
                    paragraph.textContent = element.name.french;
                    document.body.appendChild(paragraph);
                    pokemonFound = true;
                    break;
                } else if (element.id === idPokemon && nomPokemon === "") {
                    var paragraph = document.createElement('p');
                    paragraph.textContent = element.name.french;
                    document.body.appendChild(paragraph);
                    pokemonFound = true;
                    break;
                } else if (element.name.french === nomPokemon && isNaN(idPokemon)) {
                    var paragraph = document.createElement('p');
                    paragraph.textContent = element.name.french;
                    document.body.appendChild(paragraph);
                    pokemonFound = true;
                    break;
                } else if (element.type.includes(typePokemon) && isNaN(idPokemon) && nomPokemon === "" ) {
                    var paragraph = document.createElement('p');
                    paragraph.textContent = element.name.french;
                    document.body.appendChild(paragraph);
                    pokemonFound = true;
                }
            }
            if (!pokemonFound) {
                var noResultParagraph = document.createElement('p');
                noResultParagraph.textContent = "Aucun résultat";
                document.body.appendChild(noResultParagraph);
            }
        });
    });
});
