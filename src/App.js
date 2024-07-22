import Overview from 'pages/profile';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import '@fontsource/inter/400.css'; /* For regular weight */
import '@fontsource/inter/700.css'; /* For bold weight */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Overview />} /> */}
                <Route path="/profile" element={<Overview />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;