export function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('findMax expects a non-empty array');
  }
  let max = arr[0];
  for (const value of arr) {
    if (value > max) max = value;
  }
  return max;
}

export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('reverseArray expects an array');
  }
  return [...arr].reverse();
}
