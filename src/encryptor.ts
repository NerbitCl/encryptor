import { Logger } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const logger = new Logger('Encryptor');

export function encrypt(value: any, secretKey: string): string | null {
  if (!value || !secretKey || secretKey.length !== 32) {
    throw new Error('Invalid input parameters');
  }

  try {
    const decrypted = value.toString();

    const iv = randomBytes(16);
    const cipher = createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);

    let encrypted = cipher.update(decrypted, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return iv.toString('hex') + ':' + encrypted;
  } catch (error) {
    logger.error('Encryption error:', error.message);
    return null;
  }
}

export function decrypt(value: any, secretKey: string): number | null {
  if (!value || !secretKey || secretKey.length !== 32) {
    throw new Error('Invalid input parameters');
  }

  try {
    const valueParts = value.split(':');
    const iv = Buffer.from(valueParts.shift(), 'hex');
    const encryptedValue = Buffer.from(valueParts.join(':'), 'hex');
    const decipher = createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);

    let decrypted = decipher.update(encryptedValue);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return parseInt(decrypted.toString());
  } catch (error) {
    logger.error('Decryption error:', error.message);
    return null;
  }
}
