declare function errorHandler(rsp: any): void;
declare function createSession(rsp: any): {
    sessionToken: any;
};
declare function terminalRequest(rsp: any): any;
declare function closeSession(rsp: any): boolean;
export { errorHandler as TERMINAL_ERROR, createSession as CREATE_SESSION, terminalRequest as TERMINAL_REQUEST, closeSession as CLOSE_SESSION };
//# sourceMappingURL=TerminalParser.d.ts.map