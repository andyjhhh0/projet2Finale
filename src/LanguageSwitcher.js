import React from 'react';
import { useLanguage } from './LanguageContext';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} disabled={language === 'en'}>
        English
      </button>
      <button onClick={() => changeLanguage('fr')} disabled={language === 'fr'}>
        Français
      </button>
    </div>
  );
}

export default LanguageSwitcher;
