const toFarsiNumber = n => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n.toString().replace(/\d/g, x => farsiDigits[x]);
};

const separateNumber = number => {
  let numStr = String(number).replace(',', '');

  const [integerPart, decimalPart] = numStr.split('.');

  const decimal = decimalPart ? `.${decimalPart}` : '';

  const rgx = /(\d+)(\d{3})/;
  let formattedIntegerPart = integerPart;
  while (rgx.test(formattedIntegerPart)) {
    formattedIntegerPart = formattedIntegerPart.replace(rgx, (match, group1, group2) => `${group1},${group2}`);
  }

  return formattedIntegerPart + decimal;
};

export { toFarsiNumber, separateNumber };