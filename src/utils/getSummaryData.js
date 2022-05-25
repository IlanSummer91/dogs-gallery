const getSummaryData = (dogsData) => {
  const summaryData = {};

  Object.values(dogsData).forEach((value) => {
    if (summaryData[value.breed] === undefined) {
      return (summaryData[value.breed] = 1);
    }

    summaryData[value.breed] += 1;
  });

  return summaryData;
};

export default getSummaryData;
