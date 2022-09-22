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
  console.log(average);
  return average;
};

export { checkEmptyFields, calculateQualificationsAverage };
