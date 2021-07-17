import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './GifGrid.css';

function GifGrid({ category }) {
  const [gifCollection, setGifCollection] = useState([]);
  const apiKey = 'BQhSthjbP9NOXgxUL6W5PsjbtuKfXEa8';

  const getGifs = async () => {
    if (category) {
      try {
        const { data } = await (
          await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
          )
        ).json();

        const collection = data.map(({ id, title, images }) => ({
          id,
          title,
          urlGif: images.downsized.url,
        }));
        setGifCollection(collection);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className='gif-grid'>
      {gifCollection.map(gif => (
        <div className='gif-grid__contenedor' key={gif.id}>
          <h3 className='gif-grid__titulo'>{gif.title.toUpperCase()}</h3>
          <img className='gif-grid__gif' src={gif.urlGif} alt={gif.title} />
        </div>
      ))}
    </div>
  );
}

GifGrid.defaultProps = {
  category: '',
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
