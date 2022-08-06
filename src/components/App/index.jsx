import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ResetStyles from '../../css/reset.jsx';
import GlobalStyles from '../../css/global.jsx';
// import Schedule from '../Schedule/index.jsx';
import Login from '../Login/index.jsx';
import Signup from '../Singup/index.jsx';
import { TokenProvider } from '../../context/tokenContext.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyles />
            <GlobalStyles />
            <TokenProvider>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    {/* <Route path="/" element={<Schedule />} /> */}
                    {/* <Route path="/about" element={<BrowserRouter />} /> */}
                    {/* <Route path="/" /> */}
                </Routes>
            </TokenProvider>
        </BrowserRouter>
    );
}