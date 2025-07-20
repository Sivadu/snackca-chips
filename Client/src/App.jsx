import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';
import HomePage from './pages/HomePage';
import FlavoursPage from './pages/FlavoursPage';
import CategoryDetailPage from "./pages/CategoryDetailPage";
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';  
import AuthForm from './components/AuthForm';
import Home from './components/Home'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flavours" element={<FlavoursPage />} />
        <Route path="/categories" element={<FlavoursPage />} />
        <Route path="/flavours/:category" element={<CategoryDetailPage />} /> {/* detail page */}
        <Route path="/ourstory" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
       <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
