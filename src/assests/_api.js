const getImagen = async()=>{
    try {
        const urlApi = 'http://api.giphy.com/v1/gifs/random?api_key=su1qpGt1TYRRHZ8CszJd4zVJUJfAHR9Q'
        const request = await fetch(urlApi)
        const {data} =  await request.json()
       const {url} = data.images.original
       console.log(url)
    } catch (error) {
        console.log(error)
    }

}
getImagen();

export default getImagen 