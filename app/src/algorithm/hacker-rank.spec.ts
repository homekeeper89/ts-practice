import { diagonalDifference } from "@app/algorithm/hacker-rank";

describe("diagonal difference", () => {
  it("should return expected", () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const res = diagonalDifference(data);
    expect(res).toEqual(2);
  });
});
