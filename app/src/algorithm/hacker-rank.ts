import { filterUniqueItems, popItemByIndex, sumItems } from '@app/util';
import { A, pipe } from '@mobily/ts-belt';
import { chain } from 'radash';

/** @link https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true */
export function calcSockMerchantByFp(_totalCount: number, items: number[]) {
  const res = pipe(
    A.uniq(items),
    A.map((data) => {
      const obj: { key: number; itemCounts: number } = {
        key: data,
        itemCounts: 0,
      };
      obj.itemCounts = items.filter((item) => data == item).length;
      return obj;
    }),
    A.filter((data) => data.itemCounts >= 2),
    A.map((data) => parseInt(`${data.itemCounts / 2}`)),
    A.reduce(0, (pre, cur) => pre + cur)
  );
  return res;
}

/** @link https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true */
export function calcSockMerchant(_totalCount: number, items: number[]) {
  const uniqueItems = filterUniqueItems(items);
  const counts: number[] = [];

  uniqueItems.forEach((uniqueItem) => {
    const duplicatedItem = items.filter((item) => uniqueItem == item);
    counts.push(duplicatedItem.length);
  });

  let remains = counts.filter((value) => value >= 2);
  remains = remains.map((value) => parseInt(`${value / 2}`));

  return remains.reduce((pre, value) => pre + value, 0);
}

type calcReturnString = 'Bon Appetit';
/** @link https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true */
export function calcBillDivision(
  foodIds: number[],
  notEatFoodIndex: number,
  totalBill: number
): number | calcReturnString {
  const calcTargetItemsTotalBill = chain(popItemByIndex, sumItems);
  const eachCost = calcTargetItemsTotalBill(foodIds, notEatFoodIndex) / 2;
  const res = totalBill - eachCost;
  return res == 0 ? 'Bon Appetit' : res;
}

/**
 * @link https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
 */
export function diagonalDifference(arr: number[][]): number {
  const getNumberByIndex = (index: number, array: number[]): number => {
    return array[index] as number;
  };

  let left = 0;
  let right = 0;
  arr.forEach((array, index) => {
    left += getNumberByIndex(index, array);
    right += getNumberByIndex(array.length - index - 1, array);
  });

  return Math.abs(left - right);
}
