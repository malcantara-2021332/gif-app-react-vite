export const getGifs = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=HZ9z7OL7cqOw3VZI71MXqmolHWMHw69q&q=${category}&limit=${10}`;
    const resp = await fetch(url);

    const { data } = await resp.json();
    //console.log(data);

    // mapeo y desestructuracion
    const gifs = data.map( (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    //console.log(gifs);
    return gifs

}