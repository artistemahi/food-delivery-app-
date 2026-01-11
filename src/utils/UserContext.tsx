import {createContext} from 'react';

interface User {
    setUserName?: (name: string) => void;
    loggedInUser: any;
}
const UserContext = createContext<User>({
    loggedInUser: 'Guest User'
});
export default UserContext;