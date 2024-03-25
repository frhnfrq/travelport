declare function _exports(settings: any): {
    shop(options: any): any;
    retrieveShop(options: any): any;
    availability(options: any): any;
    airPrice(options: any): any;
    fareRules(options: any): any;
    toQueue(options: any): any;
    addSegments(options: any): any;
    book(options: any): any;
    getBooking(options: any): Promise<any>;
    getPNR(options: any): Promise<any>;
    getUniversalRecord(options: any): any;
    importUniversalRecordByPNR(options: any): any;
    getUniversalRecordByPNR(options: any): Promise<any>;
    ticket(options: any): Promise<any>;
    flightInfo(options: any): any;
    getTicketFromTicketsList(pnr: any, ticketNumber: any): Promise<any>;
    retryableTicketErrorHandlers: {
        'AirRuntimeError.TicketInfoIncomplete': (ticketNumber: any) => Promise<any>;
        'AirRuntimeError.DuplicateTicketFound': (ticketNumber: any) => Promise<any>;
    };
    getTicket(options: any): Promise<any>;
    getTickets(options: any): Promise<any>;
    getPNRByTicketNumber(options: any): Promise<any>;
    searchBookingsByPassengerName(options: any): Promise<{
        type: string;
        data: any;
    }>;
    cancelTicket(options: any): Promise<any>;
    cancelBooking(options: any): Promise<boolean>;
    cancelPNR(options: any): Promise<boolean>;
    getExchangeInformation(options: any): Promise<any>;
    exchangeBooking(options: any): Promise<any>;
    getEMDList(options: any): any;
    getEMDItem(options: any): any;
};
export = _exports;
//# sourceMappingURL=Air.d.ts.map