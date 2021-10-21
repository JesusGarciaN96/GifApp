import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas unitarias en hooks', () => {
  test('Debe mostrar el valor inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Saitama'));
    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
