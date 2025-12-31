import { useState, useEffect } from 'react';

const useOnlineStatus = (): boolean => {

const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

useEffect (()=>{

        window.addEventListener('offline',()=>setOnlineStatus(false));
        window.addEventListener('online',()=>setOnlineStatus(true));
    
},[])
// Return the current online status as boolean
 return onlineStatus;
}
export default useOnlineStatus;