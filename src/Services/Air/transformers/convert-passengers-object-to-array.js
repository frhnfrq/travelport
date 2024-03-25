module.exports = (params) => {
  const list = [];

  Object.keys(params.passengers).forEach((ageCategory) => {
    const number = params.passengers[ageCategory];
    if (number) {
      for (let i = 0; i < number; i += 1) {
        list.push({
          ageCategory,
          child: ageCategory === "CNN", // quickfix
          infant: ageCategory === "INF",
        });
      }
    }
  });

  // Sort the list by ageCategory: ADT, INF, CNN
  list.sort((a, b) => {
    const order = { ADT: 0, INF: 1, CNN: 2 };
    return order[a.ageCategory] - order[b.ageCategory];
  });

  // Add references based on the sorted order
  list.forEach((passenger, index) => {
    passenger.ref = `P_${index}`;
  });

  params.passengers = list;
  return params;
};
