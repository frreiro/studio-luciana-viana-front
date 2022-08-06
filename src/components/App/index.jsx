import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ResetStyles from '../../css/reset.jsx';
import GlobalStyles from '../../css/global.jsx';
// import Schedule from '../Schedule/index.jsx';
// import Login from '../Login/index.jsx';
import Signup from '../Singup/index.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyles />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Signup />} />

                {/* <Route path="/" element={<Schedule />} /> */}
                {/* <Route path="/about" element={<BrowserRouter />} /> */}
                {/* <Route path="/" /> */}
            </Routes>
        </BrowserRouter>
    );
}