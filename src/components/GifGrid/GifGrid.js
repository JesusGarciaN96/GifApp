import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../../hooks/useFetchGifs';

import './GifGrid.css';

function GifGrid({ category }) {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      {loading && <h2>Cargando Imágenes...</h2>}
      <div className='gif-grid animate__animated animate__slideInUp'>
        <h2 className='gif-grid__title'>{category}</h2>
        <div className='gif-grid__grid'>
          {data.map(gif => (
            <div className='gif-grid__container' key={gif.id}>
              <h5 className='gif-grid__gif-title'>{gif.title.toUpperCase()}</h5>
              <img className='gif-grid__gif' src={gif.urlGif} alt={gif.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

GifGrid.defaultProps = {
  category: '',
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
