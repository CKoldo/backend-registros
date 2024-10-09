"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servers_1 = __importDefault(require("./models/servers"));
const dotenv_1 = __importDefault(require("dotenv"));
//COnfiguramos las variables de ambiente
dotenv_1.default.config();
const server = new servers_1.default();
