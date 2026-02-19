import { toUpperCase } from './stringModule.js';

export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

export default function multiply(a, b) {
  return Number(a) * Number(b);
}

export function addAndLogUpper(a, b) {
  const result = add(a, b);
  const upper = toUpperCase(result.toString());
  console.log('[addAndLogUpper]', upper);
  return result;
}