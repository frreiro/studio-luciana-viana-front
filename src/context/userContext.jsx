import { createContext, useState, React, useContext } from 'react';
import { getUserNameAndEmail } from '../services/booking.js';
import { TokenContext } from './tokenContext.jsx';

const UserContext = createContext();

function UserProvider({ children }) {
    const { token } = useContext(TokenContext);
    async function getUser() {
        const userInfo = await getUserNameAndEmail(token);
        return userInfo;
    }

    const [user, setUser] = useState(getUser());

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export { UserContext, UserProvider };