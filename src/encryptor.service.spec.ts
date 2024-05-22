import { EncryptorService } from './encryptor.service';

describe('EncryptorService', () => {
  let service: EncryptorService;

  beforeEach(() => {
    service = new EncryptorService();
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
