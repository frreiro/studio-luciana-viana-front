import { createContext, useState, React, useContext } from 'react';
import { getUserNameAndEmail } from '../services/booking.js';
import { TokenContext } from './tokenContext.jsx';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const { token } = useContext(TokenContext);

    if (token && !user) {
        (async () => {
            const userInfo = await getUserNameAndEmail(token);
            setUser(userInfo);
        })();
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export { UserContext, UserProvider };