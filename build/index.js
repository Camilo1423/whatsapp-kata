"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./Infrastructure/routes"));
const http_1 = __importDefault(require("http"));
const port = process.env.PORT || 3001;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
exports.server = server;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('tmp'));
app.use(`/api/v1/`, routes_1.default);
server.listen(port, () => console.log(`Application run in http://localhost:${port}`));
