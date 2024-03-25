export = Parser;
declare function Parser(root: any, uapiVersion: any, env: any, debug: any, config: any, provider: any): void;
declare class Parser {
    constructor(root: any, uapiVersion: any, env: any, debug: any, config: any, provider: any);
    debug: any;
    config: any;
    provider: any;
    uapi_version: any;
    env: any;
    rootObject: any;
    mapArrayKeys(array: any, name: any): any;
    mergeLeafRecursive(obj: any, name: any): any;
    parseXML(xml: any): Promise<any>;
    parseVersion(obj: any): any;
    parse(xml: any): Promise<any>;
}
//# sourceMappingURL=uapi-parser.d.ts.map