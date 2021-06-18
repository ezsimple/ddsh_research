const BASE_PIXEL = 15;

export const toRem = (num) => {
  return num / BASE_PIXEL;
};

export const getValue = (value) => {
  if (!isNaN(value) && value === 0) return value + 'px';
  if (!value) return null;
  if (isNaN(value)) return value;
  return toRem(value) + 'rem';
};
