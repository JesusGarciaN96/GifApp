const apiKey = 'BQhSthjbP9NOXgxUL6W5PsjbtuKfXEa8';

export const getGifs = async category => {
  if (category) {
    try {
      const { data } = await (
        await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
            category
          )}&limit=10`
        )
      ).json();

      const collection = data.map(({ id, title, images }) => ({
        id,
        title,
        urlGif: images.downsized.url,
      }));
      return collection;
    } catch (ex) {
      console.log(ex);
    }
  }
};
