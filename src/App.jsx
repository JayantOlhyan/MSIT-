import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CSEDepartment from './pages/CSEDepartment';

const App = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cse" element={<CSEDepartment />} />
                    {/* Additional pages will be registered here as they are built */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
