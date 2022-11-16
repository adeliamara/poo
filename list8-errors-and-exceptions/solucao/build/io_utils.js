"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFile = exports.get_number = exports.get_number_in_range = exports.input = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const fs = __importStar(require("fs"));
exports.input = (0, prompt_sync_1.default)({
    sigint: false
});
function get_number_in_range(minimo, maximo) {
    let number = get_number();
    while (number < minimo || number > maximo) {
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `);
        number = get_number();
    }
    return number;
}
exports.get_number_in_range = get_number_in_range;
function get_number(msg = '') {
    let value = Number((0, exports.input)(msg));
    if (isNaN(value)) {
        console.log('\n ****** Favor digite um valor numérico ****** \n');
        value = get_number(msg);
    }
    return value;
}
exports.get_number = get_number;
function loadFile(fileName) {
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        return data;
    }
    catch (error) {
        console.error(error);
    }
}
exports.loadFile = loadFile;
