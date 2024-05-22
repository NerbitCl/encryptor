"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EncryptorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptorService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let EncryptorService = EncryptorService_1 = class EncryptorService {
    constructor() {
        this.logger = new common_1.Logger(EncryptorService_1.name);
    }
    encrypt(value, secretKey) {
        if (!value || !secretKey || secretKey.length !== 32) {
            throw new Error('Invalid input parameters');
        }
        try {
            const decrypted = value.toString();
            const iv = (0, crypto_1.randomBytes)(16);
            const cipher = (0, crypto_1.createCipheriv)('aes-256-cbc', Buffer.from(secretKey), iv);
            let encrypted = cipher.update(decrypted, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return iv.toString('hex') + ':' + encrypted;
        }
        catch (error) {
            this.logger.error('Encryption error:', error.message);
            return null;
        }
    }
    decrypt(value, secretKey) {
        if (!value || !secretKey || secretKey.length !== 32) {
            throw new Error('Invalid input parameters');
        }
        try {
            const valueParts = value.split(':');
            const iv = Buffer.from(valueParts.shift(), 'hex');
            const encryptedValue = Buffer.from(valueParts.join(':'), 'hex');
            const decipher = (0, crypto_1.createDecipheriv)('aes-256-cbc', Buffer.from(secretKey), iv);
            let decrypted = decipher.update(encryptedValue);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return parseInt(decrypted.toString());
        }
        catch (error) {
            this.logger.error('Decryption error:', error.message);
            return null;
        }
    }
};
exports.EncryptorService = EncryptorService;
exports.EncryptorService = EncryptorService = EncryptorService_1 = __decorate([
    (0, common_1.Injectable)()
], EncryptorService);
//# sourceMappingURL=encryptor.service.js.map