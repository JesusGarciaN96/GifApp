import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from '../components/GifGrid/GifGrid';

describe('Testing de componentes con Enzyme', () => {
  const categoria = 'One Punch Man';
  const claseContenedor = 'animate__slideInUp';
  const wrapper = shallow(<GifGrid category={categoria} />);

  test('Debe mostrar (renderizar) <GifGrid /> de manera correcta', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('La categoria debe ser una cadena valida', () => {
    const titulo = wrapper.find('.gif-grid__title');
    expect(titulo.text().trim()).toBe(categoria);
  });

  test('Verificar que la clase sea correcta', () => {
    const contenedorComponente = wrapper.find('.gif-grid').prop('className');
    expect(contenedorComponente.split(' ')).toContain(claseContenedor);
  });

  test('Validar que la url sea de una imagen', () => {
    const urlImagenRenderizada = wrapper.find('img').at(0);
    console.log(urlImagenRenderizada);
  });
});
