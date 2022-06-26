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

export const findCountryOrProvince = (values, itemSelectedFromList) => {
  // value.map((item) => console.log(item.province));
  const result = values.filter(
    (value) =>
      value.country === itemSelectedFromList ||
      value.province === itemSelectedFromList.toLowerCase()
  );
  // console.log(result);
  return result[0];
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
};
