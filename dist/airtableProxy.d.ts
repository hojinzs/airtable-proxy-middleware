import { RequestHandler } from "express";
import { Options } from "http-proxy-middleware";
export interface AirtableProxyOptions {
    apiKey: string;
    path?: string;
    target?: string;
    debug?: boolean;
    proxyMiddlewareOptions?: Options;
}
export declare function createAirtableProxy(options: AirtableProxyOptions): RequestHandler;
