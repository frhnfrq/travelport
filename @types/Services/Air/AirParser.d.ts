declare function lowFaresSearchRequest(obj: any): any[] | {
    fares: any[];
};
declare function airPrice(obj: any): {
    uapi_pricing_info_ref: any;
    uapi_pricing_info_group: any;
    farePricingMethod: any;
    farePricingType: any;
    platingCarrier: any;
    totalPrice: any;
    basePrice: any;
    equivalentBasePrice: any;
    taxes: any;
    directions: any;
    bookingComponents: {
        totalPrice: any;
        basePrice: any;
        taxes: any;
        uapi_fare_reference: any;
    }[];
    passengerCounts: {};
    passengerFares: {};
    fareInfo: {
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
    taxesInfo: ({
        value: any;
        type: any;
    } & {
        details: any;
    })[];
    baggage: any[];
    timeToReprice: any;
};
declare function airPriceRspPricingSolutionXML(obj: any): {
    'air:AirPricingSolution': any;
    'air:AirPricingSolution_XML': {};
    'air:AirSegment': any;
};
declare function airPriceFareRules(data: any): any;
declare function extractBookings(obj: any): any;
declare function ticketParse(obj: any): never;
declare function importRequest(data: any): any;
declare function universalRecordRetrieveRequest(data: any): any;
declare function gdsQueue(req: any): boolean;
declare function nullParsing(obj: any): any;
declare function AirErrorHandler(rsp: any): void;
declare function airFlightInfoRsp(obj: any): any[] | {
    from: any;
    to: any;
    departure: any;
    arrival: any;
    duration: any;
    plane: any;
    fromTerminal: any;
    toTerminal: any;
};
declare function airGetTicket(obj: any, parseParams?: {
    allowNoProviderLocatorCodeRetrieval: boolean;
}): any;
declare function airGetTickets(obj: any): any[];
declare function airGetTicketsErrorHandler(rsp: any): any;
declare function airCancelTicket(obj: any): boolean;
declare function airCancelPnr(obj: any): boolean;
declare function exchangeQuote(req: any): Promise<{
    exchangeToken: any;
    exchangeDetails: any;
    segments: {
        serviceClass: any;
        bookingClass: any;
        from: any;
        to: any;
        group: number;
        departure: any;
        arrival: any;
        airline: any;
        flightNumber: any;
        uapi_segment_ref: any;
        uapiSegmentReference: any;
    }[];
    pricingInfo: ({
        bookingInfo: {
            bookingCode: any;
            cabinClass: any;
            baggage: {
                amount: number;
                units: string;
            };
            fareBasis: any;
            from: any;
            to: any;
            uapi_segment_ref: any;
        }[];
        uapi_pricing_info_ref: any;
        basePrice: any;
        taxes: any;
        equivalentBasePrice: any;
        totalPrice: any;
    } & {
        fareCalculation: any;
    } & {
        firstOrigin: any;
    } & {
        roe: any;
    })[];
    pricingDetails: {
        pricingType: any;
        lowFareFound: boolean;
        lowFarePricing: boolean;
        discountApplies: boolean;
        penaltyApplies: boolean;
        conversionRate: number;
        rateOfExchange: number;
        validatingVendor: any;
    };
    pricingSolution: {
        basePrice: any;
        taxes: any;
        equivalentBasePrice: any;
        totalPrice: any;
    };
    exchangeTotal: {
        pricingTag: any;
        addCollection: any;
        changeFee: any;
        exchangeAmount: any;
        refund: any;
    };
}>;
declare function exchangeBooking(rsp: any): boolean;
declare function availability(rsp: any): {
    legs: any[][];
    nextResultReference: any;
};
declare function getEMDList(obj: any): any[];
declare function getEMDItem(obj: any): {
    passenger: {
        lastName: any;
        firstName: any;
        ageCategory: any;
        age: any;
    };
    airlineLocatorInfo: any;
    details: {
        coupons: {
            uapi_emd_coupon_ref: any;
            number: number;
            status: any;
            svcDesc: any;
            consumedAtIssuanceInd: boolean;
            rfiCode: any;
            rfiSubcode: any;
            rfiDesc: any;
            origin: any;
            destination: any;
            flightNumber: any;
            isRefundable: boolean;
        }[];
        uapi_emd_ref: any;
        issuedAt: any;
        number: any;
        status: any;
        isPrimaryDocument: boolean;
        associatedTicket: any;
        platingCarrier: any;
    };
    payment: {
        uapi_payment_ref: any;
        type: any;
        amount: any;
        uapi_fop_ref: any;
    }[];
    fop: {
        uapi_fop_ref: any;
        type: any;
        reusable: boolean;
        profileKey: any;
    }[];
    pricingInfo: {
        taxInfo: {
            amount: any;
            category: any;
        };
        baseFare: any;
        totalFare: any;
        totalTax: any;
    };
    uapi_emd_ref: any;
    pnr: any;
};
export { lowFaresSearchRequest as AIR_LOW_FARE_SEARCH_REQUEST, airPrice as AIR_PRICE_REQUEST, airPriceRspPricingSolutionXML as AIR_PRICE_REQUEST_PRICING_SOLUTION_XML, airPriceFareRules as AIR_PRICE_FARE_RULES_REQUEST, extractBookings as AIR_CREATE_RESERVATION_REQUEST, ticketParse as AIR_TICKET_REQUEST, importRequest as AIR_IMPORT_REQUEST, universalRecordRetrieveRequest as UNIVERSAL_RECORD_RETRIEVE_REQUEST, gdsQueue as GDS_QUEUE_PLACE_RESPONSE, nullParsing as AIR_CANCEL_UR, nullParsing as UNIVERSAL_RECORD_FOID, nullParsing as UNIVERSAL_RECORD_MODIFY, AirErrorHandler as AIR_ERRORS, airFlightInfoRsp as AIR_FLIGHT_INFORMATION, airGetTicket as AIR_GET_TICKET, airGetTickets as AIR_GET_TICKETS, airGetTicketsErrorHandler as AIR_GET_TICKETS_ERROR_HANDLER, airCancelTicket as AIR_CANCEL_TICKET, airCancelPnr as AIR_CANCEL_PNR, exchangeQuote as AIR_EXCHANGE_QUOTE, exchangeBooking as AIR_EXCHANGE, availability as AIR_AVAILABILITY, getEMDList as AIR_EMD_LIST, getEMDItem as AIR_EMD_ITEM };
//# sourceMappingURL=AirParser.d.ts.map