export const addCommaToValue = (value) => {
  if (value) {
    let valueWithComma = value.toLocaleString("en-US");
    return valueWithComma;
  }
  return;
};
