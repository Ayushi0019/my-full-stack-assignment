import React from 'react';

const languages = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP'];

export function Sidebar({ selectedLanguage, onSelect }) {
  return (
    <div id="sidebar" className="w-48 bg-worst-sidebar border-4 border-black h-screen p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 underline text-center">
        MY PROJECT
      </h1>

      <div className="space-y-4">
        <p className="text-sm font-bold border-b-2 border-black mb-2">
          Pick a Language!!
        </p>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelect(lang)}
            className={`w-full text-left px-4 py-2 font-bold border-2 border-black transition-all ${
              selectedLanguage === lang 
              ? 'bg-worst-btn text-black' 
              : 'bg-white text-black hover:bg-worst-accent hover:text-white'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
