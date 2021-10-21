import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifExpertApp from '../GifExpertApp';

describe('Test de la vista de gifs', () => {
  test('El render de la vista debe mostrarse', () => {
    const componente = shallow(<GifExpertApp />);
    expect(componente).toMatchSnapshot();
  });
});
