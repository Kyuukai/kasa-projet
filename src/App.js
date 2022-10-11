import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="*" element={<Error />}>
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;