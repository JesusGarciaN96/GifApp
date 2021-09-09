import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../components/GifGrid/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');

// Se usa el mock en todos los test antes de usar el shallow
// de otra manera habra un error en la desestructuración de GifGrid
describe('Testing de componentes con Enzyme', () => {
  const categoria = 'One Punch Man';
  const claseContenedor = 'animate__slideInUp';

  test('Debe mostrar (renderizar) <GifGrid /> de manera correcta', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const componente = shallow(<GifGrid category={categoria} />);
    expect(componente).toMatchSnapshot();
  });

  test('La categoria debe ser una cadena valida', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper.find('.gif-grid__title').text().trim()).toBe(categoria);
  });

  test('Verificar que la clase sea correcta', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper.find('.gif-grid').prop('className').split(' ')).toContain(
      claseContenedor
    );
  });

  test('Validar que la url sea de una imagen', () => {
    const fakeDataResponse = [
      {
        id: 1,
        title: 'Saitama',
        urlGif: 'https://localhost/some/saitama.png',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: fakeDataResponse,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    console.log(wrapper.find('img').at(0));
  });

  // Llama el hook de fetch y usa un mock para simular que si respondio
  // y verificamos que coincida con el sanpshot
  test('Debe mostrar items cuando se carga el componente', () => {
    const fakeDataResponse = [
      {
        id: 1,
        title: 'Saitama',
        urlGif: 'https://localhost/some/saitama.png',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: fakeDataResponse,
      loading: false,
    });
    const componente = shallow(<GifGrid category={categoria} />);
    expect(componente).toMatchSnapshot();
  });
});
