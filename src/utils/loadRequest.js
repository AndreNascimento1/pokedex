export const loadRequest = async () => {
    const contentRequest = fetch('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0'); //para pegar todos 100000


    const [ content ] = await Promise.all([ contentRequest ]);

    const contentJson = await content.json();

    const pokemonAndPhoto = contentJson.results.map((content, index) => {
        return {...content, index: index, cover: contentJson.results[index].url};
    });

    return pokemonAndPhoto;
}

export const loadSpecificRequest = async (pokemon) => {
    const contentRequest = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon+1}`);

    const [ content ] = await Promise.all([ contentRequest ]);


    const contentJson = await content.json();

    return contentJson;
}