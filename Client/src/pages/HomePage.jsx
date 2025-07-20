import React from 'react';
import '../index.css'; // or whatever your filename is
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import BananaChipsSection from '../components/BananaChipsSection'; 
import JackfruitChipsSection from '../components/JackfruitChipsSection'; 
import WhyChooseUs from '../components/WhyChooseUs';
import ExploreSection from '../components/ExploreSection'; // Assuming you have this component 
import Footer from '../components/Footer'; // Assuming you have a Footer component

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BananaChipsSection />
      <JackfruitChipsSection />
      <WhyChooseUs /> 
      <ExploreSection />
      <Footer />
      {/* Add more sections as needed */}
      {/* More sections can follow */}
    </div>
  );
}

export default App;
