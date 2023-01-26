import {
  calcBillDivision,
  calcBillDivisionByFP,
  calcRepeatedString,
  calcSockMerchant,
  calcSockMerchantByFp,
  diagonalDifference,
} from '@app/algorithm/hacker-rank';

describe('repeated string', () => {
  it.each([
    ['aba', 10, 7],
    ['a', 1000000000000, 1000000000000],
  ])('should return expected', (givenStr, num, expected) => {
    const res = calcRepeatedString(givenStr, num);
    expect(res).toEqual(expected);
  });
});
describe('sock merchant', () => {
  it.each([
    [9, [10, 20, 20, 10, 10, 30, 50, 10, 20], 3],
    [7, [1, 2, 1, 2, 1, 3, 2], 2],
  ])('should return expected', async (totalCount, items, expected) => {
    const res = calcSockMerchant(totalCount, items);
    expect(res).toEqual(expected);

    const fpRes = calcSockMerchantByFp(totalCount, items);
    expect(res).toEqual(fpRes);
  });
});

describe('calc bill division', () => {
  it.each([
    [[3, 10, 2, 9], 1, 12, 5],
    [[3, 10, 2, 9], 1, 7, 'Bon Appetit'],
  ])('should return expected', (foods, index, bill, expected) => {
    const res = calcBillDivision(foods, index, bill);
    expect(res).toEqual(expected);

    const resFp = calcBillDivisionByFP(foods, index, bill);
    expect(res).toEqual(resFp);
  });
});

describe('diagonal difference', () => {
  it.each([
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
      ],
      2,
    ],
    [
      [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ],
      15,
    ],
  ])('should return expected', (data, expectValue) => {
    const res = diagonalDifference(data);
    expect(res).toEqual(expectValue);
  });
});
