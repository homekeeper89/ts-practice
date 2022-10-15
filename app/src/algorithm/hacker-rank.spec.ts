import { diagonalDifference } from "@app/algorithm/hacker-rank";

describe("diagonal difference", () => {
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
  ])("should return expected", (data, expectValue) => {
    const res = diagonalDifference(data);
    expect(res).toEqual(expectValue);
  });
});
