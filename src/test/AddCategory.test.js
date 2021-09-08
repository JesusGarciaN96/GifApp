import React from 'react';
import { shallow } from 'enzyme';

import AddCategory from '../components/AddCategory/AddCategory';

describe('Pruebas unitarias para componente AddCategory', () => {
  const agregarCategoria = () => [
    'One Punch Man',
    'Dragon Ball Super',
    'Pokemon',
  ];
  const wrapper = shallow(<AddCategory addCategory={agregarCategoria} />);

  test('Render del componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
