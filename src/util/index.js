const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

function includes(completeWord, shortWord) {
    const complete = completeWord.toUpperCase();
    const short =shortWord.toUpperCase();
    return complete.indexOf(short) !== -1;
}

function filterTypes(word, pokemon) {
    const types = [...pokemon.Types];
    return types.filter(type => includes(type, word))
}

function containsNameOrType(word, pokemon) {
    const filteredTypes = filterTypes(word, pokemon);
    return includes(pokemon.Name,word) || filteredTypes.length > 0;
}

function containsNameAndType(word, pokemon) {
    const filteredTypes = filterTypes(word, pokemon);
    return includes(pokemon.Name,word) && filteredTypes.length > 0;
}

function sortByNameAndType(keyword, pokemonList) {
    return pokemonList.sort((pokA, pokB) => {
        if(containsNameAndType(keyword, pokB)){
            return 1;
        }
        if(containsNameAndType(keyword, pokA)){
            return -1;
        }
        return 0;
    });
}

const util = {
    getPokemos: () => {
        return fetch(URL_PATH).then(response => response.json());
    },
    filterByNameOrType: (keyword, pokemonList) => {
        return pokemonList.filter(pokemon => containsNameOrType(keyword, pokemon));
    },
    sortByNameAndType: sortByNameAndType
}

export default util;