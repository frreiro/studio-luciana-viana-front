import { createContext, useState, React } from 'react';

const BannerContext = createContext();

function BannerProvider({ children }) {
    const [isFlipped, setIsFlipped] = useState(false);


    return (
        <BannerContext.Provider value={{ isFlipped, setIsFlipped }}>{children}</BannerContext.Provider>
    );
}



export { BannerContext, BannerProvider };