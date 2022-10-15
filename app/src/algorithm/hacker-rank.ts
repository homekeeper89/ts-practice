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
