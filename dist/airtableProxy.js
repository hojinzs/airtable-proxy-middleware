"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAirtableProxy = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
function createAirtableProxy(options) {
    const { apiKey, target, path, debug, proxyMiddlewareOptions } = options;
    return (0, http_proxy_middleware_1.createProxyMiddleware)(Object.assign({ logLevel: debug ? "debug" : undefined, target: target || `https://api.airtable.com`, changeOrigin: true, headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }, pathRewrite: {
            [`^/${path}`]: ''
        } }, proxyMiddlewareOptions));
}
exports.createAirtableProxy = createAirtableProxy;
