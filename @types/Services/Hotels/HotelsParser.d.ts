declare function errorHandler(rsp: any): never;
declare function searchParse(rsp: any): {
    nextResult: any;
    HostToken: any;
    hotels: any;
};
declare function rateParse(rsp: any): {
    HostToken: any;
    Comments: any;
    Agregators: any;
};
declare function bookParse(rsp: any): {
    ResponseMessages: any;
    LocatorCode: any;
    Status: any;
    ProviderReservationInfo: {
        ProviderCode: any;
        LocatorCode: any;
        CreateDate: any;
    };
    HotelReservation: {
        Status: any;
        AggregatorBookingStatus: any;
        BookingConfirmation: any;
        LocatorCode: any;
        CreateDate: any;
    };
};
declare function cancelBookParse(obj: any): {
    Cancelled: any;
    CreateDate: any;
    CancelInfo: any;
};
export { errorHandler as HOTELS_ERROR, searchParse as HOTELS_SEARCH_REQUEST, rateParse as HOTELS_RATE_REQUEST, bookParse as HOTELS_BOOK_REQUEST, cancelBookParse as HOTELS_CANCEL_BOOK_REQUEST };
//# sourceMappingURL=HotelsParser.d.ts.map