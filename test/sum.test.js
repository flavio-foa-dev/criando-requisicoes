import sum from '../exemplo.js';

describe('sum', () => {
  it('Deve retorna a soma dois numeros', () => {
    const a = 7;
    const b = 3;

    const result = sum(a, b);

    expect(result).toBe(10);
  });
});
