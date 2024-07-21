import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext'; // Importez votre contexte
import LanguageSwitcher from './LanguageSwitcher'
import Navbar from './Navbar';
import Home from './Home';
import Foot from './Foot';
import LogIn from './Login';
import Build from './Build';
import Build2 from './Build2';
import Build3 from './Build3';
import Buynow from './Buynow';
import Contact from './Contact';
import LatestNews from './News';
import Shop from './Shop';
import FAQ from './FAQ';


import NavbarFr from './NavbarFr';
import HomeFr from './HomeFr';
import FootFr from './FootFr';
import LogInFr from './LoginFr';
import BuildFr from './BuildFr';
import Build2Fr from './Build2Fr';
import Build3Fr from './Build3Fr';
import BuynowFr from './BuynowFr';
import ContactFr from './ContactFr';
import LatestNewsFr from './NewsFr';
import ShopFr from './ShopFr';
import FAQFr from './FAQFr';

function AppContent() {
  const { language } = useLanguage();

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher/>
        {language === 'en' ? <Navbar /> : <NavbarFr />}
        <div className="content">
          <Routes>
            <Route path='/' element={language === 'en' ? <Home /> : <HomeFr />} />
            <Route path="/LogIn" element={language === 'en' ? <LogIn /> : <LogInFr />} />
            <Route path="/Build" element={language === 'en' ? <Build /> : <BuildFr />} />
            <Route path="/Contact" element={language === 'en' ? <Contact /> : <ContactFr />} />
            <Route path="/LatestNews" element={language === 'en' ? <LatestNews /> : <LatestNewsFr />} />
            <Route path="/Shop" element={language === 'en' ? <Shop /> : <ShopFr />} />
            <Route path="/Build2" element={language === 'en' ? <Build2 /> : <Build2Fr />} />
            <Route path="/Build3" element={language === 'en' ? <Build3 /> : <Build3Fr />} />
            <Route path="/Buynow" element={language === 'en' ? <Buynow /> : <BuynowFr />} />
            <Route path="/FAQ" element={language === 'en' ? <FAQ /> : <FAQFr />} />
          </Routes>
        </div>
        {language === 'en' ? <Foot /> : <FootFr />}
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
