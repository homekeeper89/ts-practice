import { popItemByIndex, sumItems } from './util';

describe('utils', () => {
  it.each([
    [[1, 2, 3], 6],
    [[2, 4], 6],
  ])('should return expected', (items, expected) => {
    const res = sumItems(items);
    expect(res).toEqual(expected);
  });

  it.each([[[1, 2, 3, 4], 1, [1, 3, 4]]])(
    'pop with number item should return ',
    (items, index, expected) => {
      const res = popItemByIndex(items, index);
      expect(res).toEqual(expected);
    }
  );

  it.each([[['a', 'b'], 1, ['a']]])(
    'pop with string item should return ',
    (items, index, expected) => {
      const res = popItemByIndex(items, index);
      expect(res).toEqual(expected);
    }
  );
});
