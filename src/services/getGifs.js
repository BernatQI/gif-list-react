export default function getGifs({ keyword } = {}) {
  const apiKey = '2KoD0gAeLpdlZh2Bt3aLig4nxmY4nVqJ';
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map(image => {
        const { images, title, id } = image;
        const { url } = image.images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    })
}