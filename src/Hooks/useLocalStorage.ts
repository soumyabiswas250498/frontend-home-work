import { encryptAES, decryptAES } from "@/utils/encryptionHandler";


function useLocalStorage() {

    const saveToLocalStorage = (data: any, key: string) => {
        const dataString = JSON.stringify(data);
        const dataEnc = encryptAES(dataString);
        localStorage.setItem(key, dataEnc);
    }
    const getLocalStorageData = (key: string) => {
        const dataEnc = localStorage.getItem(key);
        const dataString = !!dataEnc && decryptAES(dataEnc);
        if (!dataString) {
            localStorage.removeItem(key)
            return null
        }
        return JSON.parse(dataString)
    }

    return { saveToLocalStorage, getLocalStorageData }
}

export default useLocalStorage;