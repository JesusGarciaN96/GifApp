import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmitCategory}>
      <input
        type='text'
        value={category}
        onChange={handleChangesCategory}
        placeholder='Agregar Categoria'
      />
      <button type='submit'>Agregar Categoria</button>
    </form>
  );
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
