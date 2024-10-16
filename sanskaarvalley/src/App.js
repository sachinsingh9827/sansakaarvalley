import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'; 
import store from './store/store'; 

import Home from './Componets/HomePage/Home';
import AboutUs from './Componets/HomePage/AboutUs';
import Services from './Componets/HomePage/Services';
import ContactUs from './Componets/ContactUs/ContactUs';
import Navbar from './Componets/Navbar/Navbar';
import Login from './Componets/Login/Login';
import MarkAttendance from './Componets/StudentAttendance/StudentAttendance'; 
import Footer from './Componets/Footer/Footer';
import TeacherDashboard from './Componets/TeacherDashboard/TeacherDashboard';
import ManageClasses from './Componets/TeacherDashboard/ManageClasses';
import Assignments from "./Componets/TeacherDashboard/Assignments";
import AdminDashboard from "./Componets/AdminDashboard/AdminDashboard";
import StudentDashboard from "./Componets/StudentDashboard/StudentDashboard";
import ProtectedRoute from './Componets/ProtectedRoute'; 
import TermsAndConditions from './Componets/Common//TermsAndConditions ';
import PrivacyPolicy from './Componets/Common/FeesDetails';
import FAQ from './Componets/Common/FAQ';
import FeesDetails from './Componets/Common/FeesDetails';
import Dashboard from './Componets/Common/HomeDashboard';
import TopStudents from './Componets/Common/TopStudents';
import BusFeesDetails from './Componets/Common/BusFeesDetails';
import UniformDetails from './Componets/Common/UniformDetails ';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/fees-details" element={<FeesDetails />} />
          <Route path="/bus-fees-details" element={<BusFeesDetails />} />
          <Route path="/uniform-details" element={<UniformDetails />} />
          <Route path="/home-desboard" element={<Dashboard />} />
          <Route path="/top-students" element={<TopStudents />} />

          {/* Teacher Routes */}
          <Route
            path="/teacher/*"
            element={
              <ProtectedRoute role="teacher">
                <TeacherRoutes />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
                <AdminRoutes />
              </ProtectedRoute>
            }
          />

          {/* Student Routes */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute role="student">
                <StudentRoutes />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

// Grouped Teacher Routes
const TeacherRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<TeacherDashboard />} />
    <Route path="manage-classes" element={<ManageClasses />} />
    <Route path="mark-attendance" element={<MarkAttendance />} />
    <Route path="assignments" element={<Assignments />} />
  </Routes>
);

// Grouped Admin Routes
const AdminRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<AdminDashboard />} />
    {/* Add other admin routes here */}
  </Routes>
);

// Grouped Student Routes
const StudentRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<StudentDashboard />} />
    {/* Add other student routes here */}
  </Routes>
);

export default App;
