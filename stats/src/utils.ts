export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  // output: ['28', '10', '2018']
  // iterating through the Array, take each of those strings and turn them into 'numbers'
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
