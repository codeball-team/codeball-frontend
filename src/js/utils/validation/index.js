export const isId = (value) => isInteger(value);

export const isInRange = (value, min, max) => value >= min && value <= max;

export const isInteger = (value) => Number.isInteger(value);

export const isNotEmptyString = (value) => typeof value === 'string' && value.length > 0;

export const isPositiveInteger = (value) => isInteger(value) && value > 0;
