import { createContext, useState, React } from 'react';

const TokenContext = createContext();

function TokenProvider({ children }) {
    const [token, setToken] = useState(null);

    return (
        <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>
    );
}



export { TokenContext, TokenProvider };