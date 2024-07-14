import { encryption_secret } from './constant';
import CryptoJS from "crypto-js";


// Encryption with AES
function encryptAES(text: string) {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        encryption_secret
    ).toString();
    return data;
}

// Decryption with AES
function decryptAES(encryptedText: string) {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, encryption_secret);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return data
    } catch (error) {
        return null
    }


}

function currentTime() {
    return Math.floor(Date.now() / 1000);
}

export { encryptAES, decryptAES, currentTime }