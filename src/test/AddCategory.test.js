import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AddCategory from '../components/AddCategory/AddCategory';

describe('Pruebas unitarias para componente AddCategory', () => {
  let wrapper;
  const setCategorias = jest.fn();

  beforeEach(() => {
    // Antes de ejecutar las test se debe limpiar cualquier mock que
    // pueda existir (valor por defecto para hacer test) y reiniciamos
    // el componente antes de ejecutar las pruebas
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory addCategory={setCategorias} />);
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

  // No se guarda el wrapper en una constante o variable porque solo almacena
  // el valor inicial del test, después aun mutando el wrapper al parecer no
  // se modifica y son distintos y no pasa el test (investigar sobre eso)
  test('Se debe llamar el setCategorias y se debe limpiar el input', () => {
    const valorInput = 'Dragon Ball Super';

    wrapper.find('input').simulate('change', {
      target: {
        value: valorInput,
      },
    });

    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    });

    expect(setCategorias).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
