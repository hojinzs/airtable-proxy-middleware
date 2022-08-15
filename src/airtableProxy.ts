import { RequestHandler } from "express";
import {createProxyMiddleware, Options} from "http-proxy-middleware";

export interface AirtableProxyOptions {
    apiKey: string,
    path?: string,
    target?: string,
    debug?: boolean,
    proxyMiddlewareOptions?: Options
}

export function createAirtableProxy(options: AirtableProxyOptions): RequestHandler {
    const {
        apiKey,
        target,
        path,
        debug,
        proxyMiddlewareOptions
    } = options

    return createProxyMiddleware({
        logLevel: debug ? "debug" : undefined,
        target: target || `https://api.airtable.com`,
        changeOrigin: true,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        pathRewrite: {
            [`^/${path}`] : ''
        },
        ...proxyMiddlewareOptions,
    })
}