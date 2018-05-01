const range = (min, max, step) => {
  const reversed = min > max;
  if (reversed) {
    return rangeReversed(max, min, step);
  }

  const result = [];
  let value = min;
  while (value < max) {
    result.push(value);
    value += step;
  }

  return result;
};

const rangeReversed = (min, max, step) => {
  const result = [];
  let value = max;

  while (value > min) {
    result.push(value);
    value -= step;
  }

  return result;
};

export default range;
