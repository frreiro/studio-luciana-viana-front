import { createContext, useState, React, useContext, useEffect } from 'react';
import { getUserNameAndEmail } from '../services/booking.js';
import { TokenContext } from './tokenContext.jsx';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const { token } = useContext(TokenContext);
    useEffect(() => {
        (async () => {
            const userInfo = await getUserNameAndEmail(token);
            setUser(userInfo);
        })();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export { UserContext, UserProvider };