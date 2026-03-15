import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CSEDepartment from './pages/CSEDepartment';
import Placements from './pages/Placements';
import SearchPage from './pages/SearchPage';
import AcademicCalendar from './pages/AcademicCalendar';
import Syllabus from './pages/Syllabus';
import TimeTable from './pages/TimeTable';
import Brochure from './pages/Brochure';
import AdminDashboard from './pages/AdminDashboard';
import DynamicPage from './pages/DynamicPage';

import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cse" element={<CSEDepartment />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/academic-calendar" element={<AcademicCalendar />} />
                    <Route path="/syllabus" element={<Syllabus />} />
                    <Route path="/timetable" element={<TimeTable />} />
                    <Route path="/brochure" element={<Brochure />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/:slug" element={<DynamicPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
