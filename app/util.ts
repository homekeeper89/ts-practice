function hasItem<T>(items: T[], item: T): boolean {
  return items.indexOf(item) !== -1;
}

export function filterUniqueItems<T>(items: readonly T[]): readonly T[] {
  const res = items.reduce((arr: T[], item: T) => {
    if (!hasItem(arr, item)) {
      arr.push(item);
    }
    return arr;
  }, []);
  return res;
}

export function sumItems(items: number[]): number {
  return items.reduce((pre, val) => pre + val, 0);
}

export function popItemByIndex<T>(items: T[], targetIndex: number): T[] {
  return items.filter((_item, index) => index != targetIndex);
}
