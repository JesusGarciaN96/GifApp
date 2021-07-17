import React, { useState } from 'react';

import AddCategory from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory addCategory={setCategories} />
      <hr />
      {categories.map(cate => (
        <GifGrid key={cate} category={cate} />
      ))}
    </>
  );
}

export default GifExpertApp;
