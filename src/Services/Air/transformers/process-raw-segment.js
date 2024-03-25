function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

function objectToXml(object, name) {
  let attributes = ``;
  for (const attributeKey in object) {
    if (attributeKey === "_") {
      continue;
    }
    const attributeValue = object[attributeKey];
    attributes += `${attributeKey}="${attributeValue}" `;
  }

  if (Object.keys(object).includes("_")) {
    return `<${name} ${attributes}>${object["_"]}</${name}>`;
  } else {
    return `<${name} ${attributes} />`;
  }
}

module.exports = (params) => {
  const segments = params.segments;
  const processedSegments = [];
  const pricingCommands = [];

  for (const segment of segments) {
    const rawSegment = segment.rawSegment;

    let processedSegment = {
      children: [],
    };

    const bucket = {};

    if (segment.transfer) {
      processedSegment.children.push("<air:Connection/>");
    }

    for (const key in rawSegment) {
      const value = rawSegment[key];

      if (isArray(value)) {
        for (const item of value) {
          if (key === "air:AirAvailInfo") {
            bucket.ProviderCode = item.ProviderCode;
          } else if (isObject(item)) {
            processedSegment.children.push(objectToXml(item, key));
          } else if (isArray(item)) {
            // ignore
            console.log("Array found in raw segment children");
          } else {
            let child;
            if (key.endsWith("Ref")) {
              continue;
              //   child = `<${key} Key="${item}" />`;
            } else {
              child = `<${key}>${item}</${key}>`;
            }

            processedSegment.children.push(child);
          }
        }
      } else if (isObject(value)) {
        processedSegment.children.push(objectToXml(value, key));
      } else {
        processedSegment[key] = value;
      }
    }

    processedSegment = { ...processedSegment, ...bucket };

    pricingCommands.push({
      Key: processedSegment.Key,
      bookingClass: segment.bookingClass,
      fareBasisCode: segment.fareBasisCode,
    });

    processedSegments.push(processedSegment);
  }

  params.processedSegments = processedSegments;
  params.pricingCommands = pricingCommands;
  params.platingCarrier = segments[0].rawSegment.Carrier;

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
