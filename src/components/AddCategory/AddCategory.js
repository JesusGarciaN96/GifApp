import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddCategory.css';

function AddCategory({ addCategory }) {
  const [category, setCategory] = useState('');

  const handleChangesCategory = ({ target }) => setCategory(target.value);

  const handleSubmitCategory = event => {
    event.preventDefault();
    if (category) {
      addCategory(cat => [...cat, category]);
      setCategory('');
    }
  };

  return (
    <form className='add-category' onSubmit={handleSubmitCategory}>
      <input
        className='add-category__search-box'
        type='text'
        value={category}
        onChange={handleChangesCategory}
        placeholder='Agregar Categoria'
      />
      <button className='add-category__button' type='submit'>
        Agregar Categoria
      </button>
    </form>
  );
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
