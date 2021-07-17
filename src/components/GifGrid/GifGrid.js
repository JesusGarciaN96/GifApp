import React, { useState, useEffect, Fragment } from 'react';
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
    <Fragment className='gif-grid'>
      <h2 className='gif-grid__title'>{category}</h2>
      <div className='gif-grid__grid'>
        {gifCollection.map(gif => (
          <div className='gif-grid__container' key={gif.id}>
            <h5 className='gif-grid__gif-title'>{gif.title.toUpperCase()}</h5>
            <img className='gif-grid__gif' src={gif.urlGif} alt={gif.title} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

GifGrid.defaultProps = {
  category: '',
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
