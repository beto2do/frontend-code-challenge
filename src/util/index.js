const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

function includes(completeWord, shortWord) {
    const complete = completeWord.toUpperCase();
    const short =shortWord.toUpperCase();
    return complete.indexOf(short) !== -1;
}

function containsNameOrType(word, pokemon) {
    const types = [...pokemon.Types];
    const filteredTypes = types.filter(type => includes(type, word))
    return includes(pokemon.Name,word) || filteredTypes.length > 0;
}

const util = {
    getPokemos: () => {
        return fetch(URL_PATH).then(response => response.json());
    },
    filterByNameOrType: (keyword, pokemonList) => {
        return pokemonList.filter(pokemon => containsNameOrType(keyword, pokemon));
    }
}

export default util;