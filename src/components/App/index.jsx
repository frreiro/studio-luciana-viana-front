import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ResetStyles from '../../css/reset.jsx';
import Main from '../Main/index.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyles />
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/about" element={<BrowserRouter />} /> */}
                {/* <Route path="/" /> */}
            </Routes>
        </BrowserRouter>
    );
}