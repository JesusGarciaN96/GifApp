import React, { useState } from 'react';

import AddCategory from './components/AddCategory';

function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory addCategory={setCategories} />
      <hr />
      <ol>
        {categories.map(categorie => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
