const moment = require("moment");

module.exports = (params) => {
  params.passengers.forEach((item) => {
    const birthSSR = moment(item.birthDate.toUpperCase(), "YYYY-MM-DD");
    const {
      passCountry: country,
      passNumber: num,
      firstName: first,
      lastName: last,
      gender,
    } = item;

    const due = moment().add(12, "month").format("DDMMMYY");
    const birth = birthSSR.format("DDMMMYY");

    item.travelerType = item.ageCategory;
    item.remarkCode = item.ageCategory;
    item.dobString = birthSSR.format("DDMMMYY").toUpperCase();

    if (item.ageCategory === "CNN") {
      item.isChild = true;

      if (item.Age < 10) {
        item.remarkCode = `C0${item.Age}`;
      } else {
        item.remarkCode = `C${item.Age}`;
      }
      item.travelerType = "CHD";
    } else if (item.ageCategory === "INF") {
      item.isInfant = true;
    }

    item.ssr = item.ssr || [];

    item.ssr.push({
      type: "FOID",
      text: `PP${country}${num}`,
    });

    if (item.ageCategory === "INF") {
      item.ssr.push({
        type: "DOCS",
        text: `P/${country}/${num}/${country}/${birth}/${gender}I/${due}/${last}/${first}`,
      });
    } else {
      item.ssr.push({
        type: "DOCS",
        text: `P/${country}/${num}/${country}/${birth}/${gender}/${due}/${last}/${first}`,
      });
    }

    item.DOB = birthSSR.format("YYYY-MM-DD");
  });

  // sort the passengers to put INF after ADT

  const adultPassengers = params.passengers.filter(
    (passenger) => passenger.ageCategory === "ADT"
  );

  const childPassengers = params.passengers.filter(
    (passenger) => passenger.ageCategory === "CNN"
  );

  const infantPassengers = params.passengers.filter(
    (passenger) => passenger.ageCategory === "INF"
  );

  params.passengers = [
    ...adultPassengers,
    ...infantPassengers,
    ...childPassengers,
  ];

  // Sort the list by ageCategory: ADT, INF, CNN

  const passengers = params.passengers;

  passengers.sort((a, b) => {
    const order = { ADT: 0, INF: 1, CNN: 2 };
    return order[a.ageCategory] - order[b.ageCategory];
  });

  // Add references based on the sorted order
  passengers.forEach((passenger, index) => {
    passenger.ref = `P_${index}`;
  });

  params.passengers = passengers;

  return params;
};
