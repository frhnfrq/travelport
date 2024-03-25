export function formatLowFaresSearch(searchRequest: any, searchResult: any): any[] | {
    fares: any[];
};
export function formatFarePricingInfo(fare: any): {
    latestTicketingTime: any;
    eTicketability: boolean;
    refundable: boolean;
    changePenalty: {
        amount: any;
        percentage: any;
        penaltyApplies: any;
    };
    cancelPenalty: {
        amount: any;
        percentage: any;
        penaltyApplies: any;
        noShow: any;
    };
};
export function formatPassengerCategories(pricingInfo: any): {
    passengerCounts: {};
    passengerCategories: {};
    passengerFares: {};
};
export function formatTrip(segment: any, flightDetails: any): {
    serviceClass: any;
    plane: any[];
    duration: any[];
    techStops: any[];
    from: any;
    to: any;
    group: number;
    departure: any;
    arrival: any;
    airline: any;
    flightNumber: any;
    uapi_segment_ref: any;
    uapiSegmentReference: any;
};
export function formatSegment(segment: any): {
    from: any;
    to: any;
    group: number;
    departure: any;
    arrival: any;
    airline: any;
    flightNumber: any;
    uapi_segment_ref: any;
    uapiSegmentReference: any;
};
export function formatServiceSegment(segment: any, remark: any): {
    carrier: any;
    airport: any;
    date: any;
    index: any;
    rfiCode: any;
    rfiSubcode: any;
    feeDescription: any;
    name: any;
    amount: number;
    currency: any;
    documentNumber: any;
};
export function formatAirExchangeBundle(bundle: any): {
    addCollection: any;
    changeFee: any;
    exchangeAmount: any;
    refund: any;
};
export function formatPrices(prices: any): {
    basePrice: any;
    taxes: any;
    equivalentBasePrice: any;
    totalPrice: any;
};
/**
 * This function used to transform segments and service segments objects
 * to arrays. After that this function try to set indexes with same as in
 * terminal response order. So it needs to check `ProviderSegmentOrder` field for that.
 *
 * @param segmentsObject
 * @param serviceSegmentsObject
 * @return {*}
 */
export function setIndexesForSegments(segmentsObject?: any, serviceSegmentsObject?: any): any;
/**
 * getBaggage -- get baggage information from LFS search
 * @param baggageAllowance
 * @returns {{amount: number, units: string}}
 */
export function getBaggage(baggageAllowance: any): {
    amount: number;
    units: string;
};
/**
 * getBaggageInfo -- get baggage information from airPrice
 * @param info
 * @returns {{amount: number, units: string}}
 */
export function getBaggageInfo(info: any): {
    amount: number;
    units: string;
};
export function buildPassenger(name: any, traveler: any): {
    lastName: any;
    firstName: any;
    uapi_passenger_ref: any;
} & {
    birthDate: string;
} & {
    ageCategory: any;
} & {
    gender: any;
};
/**
 * This function adds segment references based on group parameter.
 * @param segments - required
 * @return [{*}]
 */
export function setReferencesForSegments(segments: any): any;
//# sourceMappingURL=AirFormat.d.ts.map