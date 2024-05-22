export declare class EncryptorService {
    private readonly logger;
    encrypt(value: any, secretKey: string): string | null;
    decrypt(value: any, secretKey: string): number | null;
}
