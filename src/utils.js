export const addCommaToValue = (value) => {
  if (value) {
    let valueWithComma = value.toLocaleString("en-US");
    return valueWithComma;
  }
  return;
};

export const formatDateAndTime = (value) => {
  if (value) {
    let formattedValue = new Date(value).toLocaleString();
    return formattedValue;
  }
};
