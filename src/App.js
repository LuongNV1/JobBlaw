import Overview from 'pages/profile';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import '@fontsource/inter/400.css'; /* For regular weight */
import '@fontsource/inter/700.css'; /* For bold weight */
import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/*" />
                <Route path="/profile" element={<Overview />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
