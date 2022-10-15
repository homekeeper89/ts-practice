const world = "Hi";

export function hello(word: string = world): string {
  console.log(`Hello ${world}! `);
  return "";
}

hello();
