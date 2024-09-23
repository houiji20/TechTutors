import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar'; // Update if necessary
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import LoginForm from './pages/LoginForm';  
import Register from './pages/Register';
import Profile from './pages/Profile';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <CustomNavbar />  {/* Use CustomNavbar here */}
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/loginForm" element={<LoginForm />} />  {/* Add route for login */}
            <Route path="/register" element={<Register />} />  {/* Add route for register */}
            <Route path="/profile" element={<Profile />} />  {/* Add route for profile */}
          </Routes>
        </main>
        <Footer />  {/* Add Footer component */}
      </div>
    </Router>
  );
};

export default App;

