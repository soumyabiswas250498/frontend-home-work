import useLocalStorage from "./useLocalStorage";

function useUserData() {
    const { getLocalStorageData } = useLocalStorage()
    const userData = getLocalStorageData('userData');
    // console.log(userData, '***userData')
    const isAdmin = userData?.role === 'admin'
    const accessToken = userData?.accessToken || null;
    // console.log(accessToken, '***a')
    return { userData, isAdmin, accessToken }
}

export default useUserData;