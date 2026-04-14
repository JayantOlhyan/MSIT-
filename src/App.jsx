import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import Placements from './pages/Placements';
import SearchPage from './pages/SearchPage';
import AcademicCalendar from './pages/AcademicCalendar';
import Syllabus from './pages/Syllabus';
import TimeTable from './pages/TimeTable';
import Brochure from './pages/Brochure';
import AdminDashboard from './pages/AdminDashboard';
import DynamicPage from './pages/DynamicPage';

import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Facilities from './pages/Facilities';
import FacultyStaff from './pages/FacultyStaff';



const App = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/academic-calendar" element={<AcademicCalendar />} />
                    <Route path="/syllabus" element={<Syllabus />} />
                    <Route path="/timetable" element={<TimeTable />} />
                    <Route path="/brochure" element={<Brochure />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfUse />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/faculty" element={<FacultyStaff />} />
                    <Route path="/500" element={<ServerError />} />


                    <Route path="/:slug" element={<DynamicPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
