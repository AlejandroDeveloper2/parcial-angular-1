const checkEmptyFields = (fields: String[]): boolean => {
  if (fields.includes('')) {
    return true;
  }
  return false;
};

const calculateQualificationsAverage = (qualifications: number[]): number => {
  let average: number = 0;
  const summation: number = qualifications.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue;
    },
    0
  );
  average = summation / qualifications.length;
  return Number(average.toFixed(2));
};

const validateNumberFileds = (numberFields: number[]): boolean => {
  let thereAnError: boolean;
  for (let i = 0; i < numberFields.length; i++) {
    const element = numberFields[i];
    if (element < 0 || element > 5) {
      thereAnError = true;
      break;
    } else {
      thereAnError = false;
    }
  }
  return thereAnError!;
};

export {
  checkEmptyFields,
  calculateQualificationsAverage,
  validateNumberFileds,
};
