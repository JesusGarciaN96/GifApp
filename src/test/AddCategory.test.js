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

  // El segundo parametro de 'simulate' son las propiedades, simula
  // el 'e' o 'event' -> 'event.target.value'
  test('Debe detectar cambios en la caja de busqueda', () => {
    const cajaBusqueda = wrapper.find('input');
    const valorSimulacion = 'Yu gi Oh!';
    cajaBusqueda.simulate('change', {
      target: {
        value: valorSimulacion,
      },
    });
    const textoBusqueda = wrapper.find('p').text().trim();
    expect(textoBusqueda).toBe(valorSimulacion);
  });
});
