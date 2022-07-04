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
  if (itemSelectedFromList === "Holy See (Vatican City State)") {
    itemSelectedFromList = "Holy See";
  }
  const result = values.filter(
    (value) =>
      value.country === itemSelectedFromList ||
      value.province === itemSelectedFromList.toLowerCase()
  );
  return result[0];
};

export const titleCaseFormat = (string) => {
  if (!string) return;
  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
};
