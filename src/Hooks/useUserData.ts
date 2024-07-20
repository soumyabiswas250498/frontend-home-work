import useLocalStorage from "./useLocalStorage";

function useUserData() {
    const { getLocalStorageData } = useLocalStorage()
    const userData = getLocalStorageData('userData');
    // console.log(userData, '***userData')
    const isAdmin = userData?.role === 'admin'
    return { userData, isAdmin }
}

export default useUserData;