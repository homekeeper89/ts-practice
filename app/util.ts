export function sumItems(items: number[]): number {
  return items.reduce((pre, val) => pre + val, 0);
}

export function popItemByIndex<T>(items: T[], targetIndex: number): T[] {
  return items.filter((_item, index) => index != targetIndex);
}
