import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimontals from './components/Testimonials';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-w-7xl mx-auto pt-20 px-6">
      <Hero />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimontals />
      <Footer />


      </div>

    </div>

  );
};

export default App;