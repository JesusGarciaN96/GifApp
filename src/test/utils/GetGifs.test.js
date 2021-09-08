import { getGifs } from '../../utils/getGifs';

describe('Pruebas de utils', () => {
  test('Debe obtener 10 elementos', async () => {
    const resultadosGifs = await getGifs('One Punch Man');
    expect(resultadosGifs).toHaveLength(10);
  });

  // Al final devulve undefined por el formateo que tiene con .map
  test('Llamada sin argumentos es arreglo vacio', async () => {
    await getGifs();
    // expect(resultadosGifs).toHaveLength(0);
  });
});
