import createUtilsService = require("./Services/Utils/UtilsService");
import createHotelService = require("./Services/Hotels/HotelsService");
import createAirService = require("./Services/Air/Air");
import createTerminalService = require("./Services/Terminal/Terminal");
import commonErrors = require("./error-types");
import requestErrors = require("./Request/RequestErrors");
import airErrors = require("./Services/Air/AirErrors");
import hotelsErrors = require("./Services/Hotels/HotelsErrors");
import utilsErrors = require("./Services/Utils/UtilsErrors");
import terminalErrors = require("./Services/Terminal/TerminalErrors");
import errorCodes = require("./error-codes");
export declare namespace errors {
    export { commonErrors as Common };
    export { requestErrors as Request };
    export { airErrors as Air };
    export { hotelsErrors as Hotels };
    export { utilsErrors as Utils };
    export { terminalErrors as Terminal };
}
export { createUtilsService, createHotelService, createAirService, createTerminalService, errorCodes };
//# sourceMappingURL=index.d.ts.map