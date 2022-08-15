"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const airtableProxy_1 = require("./airtableProxy");
if (typeof process.env.AIRTABLE_API_KEY === 'undefined') {
    throw "SERVER ERROR : define environment AIRTABLE_API_KEY first";
}
const server = (0, express_1.default)();
server.use('/api', (0, airtableProxy_1.createAirtableProxy)({
    apiKey: process.env.AIRTABLE_API_KEY,
    path: 'api'
}));
server.listen(3000, () => {
    console.log("server is on http://localhost:3000");
});
