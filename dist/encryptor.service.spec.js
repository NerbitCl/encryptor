"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encryptor_service_1 = require("./encryptor.service");
describe('EncryptorService', () => {
    let service;
    beforeEach(() => {
        service = new encryptor_service_1.EncryptorService();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should encrypt and decrypt a number', () => {
        const secretKey = '12345678901234567890123456789012';
        const plainId = 100;
        const encryptedId = service.encrypt(plainId, secretKey);
        expect(encryptedId).not.toEqual(plainId.toString());
        const decryptedId = service.decrypt(encryptedId, secretKey);
        expect(decryptedId).toEqual(plainId);
    });
    it('should return null for incorrect decryption', () => {
        const secretKey = '12345678901234567890123456789012';
        const encryptedId = 'invalid-encrypted-text';
        const decryptedId = service.decrypt(encryptedId, secretKey);
        expect(decryptedId).toBeNull();
    });
});
//# sourceMappingURL=encryptor.service.spec.js.map