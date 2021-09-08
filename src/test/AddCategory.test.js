import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AddCategory from '../components/AddCategory/AddCategory';

describe('Pruebas unitarias para componente AddCategory', () => {
  const agregarCategoria = () => [
    'One Punch Man',
    'Dragon Ball Super',
    'Pokemon',
  ];
  let wrapper;
  const setCategorias = jest.fn();

  beforeEach(() => {
    // Antes de ejecutar las test se debe limpiar cualquier mock que
    // pueda existir (valor por defecto para hacer test) y reiniciamos
    // el componente antes de ejecutar las pruebas
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory addCategory={agregarCategoria} />);
  });

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

  test('No se debe ejecutar el evento submit', () => {
    const formularioGif = wrapper.find('form');
    formularioGif.simulate('submit', {
      preventDefault() {},
    });
    expect(setCategorias).not.toHaveBeenCalled();
  });
});
