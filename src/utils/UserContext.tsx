import {createContext} from 'react';

interface User {
    loggedInUser: string;
}
const UserContext = createContext<User>({
    loggedInUser: 'Guest User'
});
export default UserContext;