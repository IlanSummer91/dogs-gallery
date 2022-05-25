const getSummaryData = (dogsData) => {
  const summaryData = {};

  Object.values(dogsData).forEach((value) => {
    if (summaryData[value.breed] === undefined) {
      summaryData[value.breed] = { count: 1, likes: 0 };

      return;
    }

    summaryData[value.breed].count += +1;
  });

  return summaryData;
};

export default getSummaryData;
