import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ResetStyles from '../../css/reset.jsx';
import GlobalStyles from '../../css/global.jsx';
import Booking from '../Booking/index.jsx';
import Login from '../Login/index.jsx';
import Signup from '../Singup/index.jsx';
import { TokenProvider } from '../../context/tokenContext.jsx';
import Historic from '../Historic/index.jsx';
import { UserProvider } from '../../context/userContext.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyles />
            <GlobalStyles />
            <TokenProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/historic" element={<Historic />} />

                        {/* <Route path="/about" element={<BrowserRouter />} /> */}
                        {/* <Route path="/" /> */}
                    </Routes>
                </UserProvider>
            </TokenProvider>
        </BrowserRouter>
    );
}