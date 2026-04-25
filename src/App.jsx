import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Spinner from './components/Spinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Placements = lazy(() => import('./pages/Placements'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const AcademicCalendar = lazy(() => import('./pages/AcademicCalendar'));
const Syllabus = lazy(() => import('./pages/Syllabus'));
const TimeTable = lazy(() => import('./pages/TimeTable'));
const Brochure = lazy(() => import('./pages/Brochure'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const DynamicPage = lazy(() => import('./pages/DynamicPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServerError = lazy(() => import('./pages/ServerError'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const Facilities = lazy(() => import('./pages/Facilities'));
const FacultyStaff = lazy(() => import('./pages/FacultyStaff'));

const App = () => {
    return (
        <AccessibilityProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <Suspense fallback={<Spinner />}>
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
                </Suspense>
            </Router>
        </AccessibilityProvider>
    );
};

export default App;
