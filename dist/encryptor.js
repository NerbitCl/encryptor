"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const logger = new common_1.Logger('Encryptor');
function encrypt(value, secretKey) {
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
        logger.error('Encryption error:', error.message);
        return null;
    }
}
exports.encrypt = encrypt;
function decrypt(value, secretKey) {
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
        logger.error('Decryption error:', error.message);
        return null;
    }
}
exports.decrypt = decrypt;
//# sourceMappingURL=encryptor.js.map