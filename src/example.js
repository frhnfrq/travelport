// const path = require("node:path");
// const uAPI = require("./src");
// // const uAPI = require("uapi-json");
// const fs = require("fs");
// // import * as fse from "fs-extra";
// const fse = require("fs-extra");

// const settings = {
//   auth: {
//     username: "Universal API/uAPI2696434906-0595c4f9",
//     password: "n{7F2E&tQ*",
//     region: "apac",
//     targetBranch: "P7205768",
//   },
//   debug: 3,
//   production: false,
//   options: {
//     logFunction(...args) {
//       fse.outputFile(
//         path.join(
//           process.cwd(),
//           "logs",
//           `${new Date().toISOString()}_travelport_log.txt`
//         ),
//         args.toString()
//       );
//     },
//   },
// };

// const AirService = uAPI.createAirService(settings);

// const from = "DEL";
// const to = "BOM";
// const adultCount = 1;
// const childCount = 1;
// const infantCount = 1;

// const legs = [
//   {
//     from: from,
//     to: to,
//     departureDate: "2024-01-25",
//   },
// ];

// const returnDate = "2024-01-30";

// const isReturn = true;

// if (isReturn) {
//   legs.push({
//     from: to,
//     to: from,
//     departureDate: returnDate,
//   });
// }

// const bookingTravellerRefs = [];

// const totalPassengers = adultCount + childCount + infantCount;

// for (const i = 0; i < totalPassengers.length; i++) {
//   bookingTravellerRefs.push(`${i}`);
// }

// const params = {
//   legs: legs,
//   passengers: {
//     ADT: adultCount,
//     CNN: childCount,
//     INF: infantCount,
//     /*
//      CNN:1,
//      INF: 1,
//      INS: 1, //infant with a seat
//      */
//   },
//   cabins: ["Economy"], // ['Business'],
//   requestId: "5e2fd1f8-2221-4b6c-b76e-cf05c497cf60",
//   maxJourneyTime: 300,
//   pricing: {
//     // currency: "USD",
//     // eTicketability: true,
//     faresIndicator: "AllFares",
//   },
// };

// AirService.shop(params)
//   .then((results) => {
//     const fromSegments = results["0"].directions["0"]["0"].segments;
//     const toSegments = results["0"].directions["1"]["0"].segments;

//     const book = {
//       requestId: params.requestId,
//       segments: [...fromSegments, ...toSegments],
//       rule: "SIP",
//       passengers: [
//         {
//           lastName: "Farooqui",
//           firstName: "Farhan",
//           passCountry: "BD",
//           passNumber: "ES221731",
//           birthDate: "1998-07-25",
//           gender: "M",
//           ageCategory: "ADT",
//           prefix: "Mr",
//         },
//         {
//           lastName: "Farooqui",
//           firstName: "Tamzid",
//           passCountry: "BD",
//           passNumber: "ES241731",
//           birthDate: "2020-07-25",
//           gender: "M",
//           ageCategory: "CNN",
//           prefix: "Mstr",
//         },
//         {
//           lastName: "Zubair",
//           firstName: "Suhani",
//           passCountry: "BD",
//           passNumber: "ES251731",
//           birthDate: "2022-07-28",
//           gender: "F",
//           ageCategory: "INF",
//           prefix: "Miss",
//         },
//       ],
//       phone: {
//         countryCode: "880",
//         location: "DAC",
//         number: "1775868353",
//       },
//       deliveryInformation: {
//         name: "Farhan Farooqui",
//         street: "Road 16, Sector 12",
//         zip: "1230",
//         country: "BD",
//         city: "Dhaka",
//       },
//       allowWaitlist: true,
//     };

//     return AirService.book(book).then(
//       (res) => console.log(res),
//       (err) => console.log(err)
//     );
//   })
//   .catch((err) => console.log("err", err));
