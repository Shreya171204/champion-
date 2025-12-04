import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsProgressSection from './components/SkillsProgressSection';
import LearnMoreSection from './components/LearnMoreSection';
import LotusSection from './components/LotusSection';
import DollSection from './components/DollSection';
import FeatureCardsSection from './components/FeatureCardsSection';

import AddUserPage from './pages/AddUserPage';
import AddUserPage2 from './pages/adduserpage2';
import AddUserPage3 from './pages/AddUserPage3';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Create Home Component
function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-cream-white font-body text-gray-800">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Progress Section */}
      <SkillsProgressSection />

      {/* Learn more / CTA */}
      <LearnMoreSection />

      {/* Feature Cards Section */}
      <FeatureCardsSection />

      {/* Lotus Section */}
      <LotusSection />

      {/* Doll Section */}
      <DollSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME AS DEFAULT ROUTE */}
        <Route path="/" element={<Home />} />

        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/add-user-2" element={<AddUserPage2 />} />
        <Route path="/add-user-3" element={<AddUserPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
