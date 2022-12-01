import { popItemByIndex, sumItems } from '@app/util';
import { chain } from 'radash';

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
    return array[index];
  };

  let left = 0;
  let right = 0;
  arr.forEach((array, index) => {
    left += getNumberByIndex(index, array);
    right += getNumberByIndex(array.length - index - 1, array);
  });

  return Math.abs(left - right);
}
