export const arrayOf = size => Array.apply(null, { length: size }).map((x, i) => i + 1);
export const randRange = (x = 0, y) => Math.floor(Math.random() * y) + x;
