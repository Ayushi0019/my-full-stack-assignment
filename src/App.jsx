import { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { QuestionList, QuestionDisplay } from './components/Content';
import { questions } from './data/questions';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('HTML');
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => q.category === selectedLanguage);
  }, [selectedLanguage]);

  const activeQuestion = useMemo(() => {
    if (selectedQuestionId) {
      const q = questions.find(q => q.id === selectedQuestionId);
      if (q && q.category === selectedLanguage) return q;
    }
    return filteredQuestions[0];
  }, [selectedQuestionId, filteredQuestions, selectedLanguage]);

  return (
    <div id="app-root" className="flex h-screen bg-white font-sans text-black overflow-hidden border-8 border-black">
      <Sidebar 
        selectedLanguage={selectedLanguage} 
        onSelect={(lang) => {
          setSelectedLanguage(lang);
          setSelectedQuestionId(null);
        }} 
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-16 bg-blue-700 flex items-center justify-between px-10 shrink-0 border-b-4 border-black">
          <h2 className="text-white text-3xl font-bold italic underline">
            {selectedLanguage} SECTION!!!
          </h2>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-64 border-r-4 border-black p-4 overflow-y-auto shrink-0 bg-gray-200">
             <p className="font-bold border-b-2 border-black mb-4 uppercase">Topic List:</p>
             <QuestionList 
              questions={filteredQuestions} 
              selectedId={activeQuestion?.id || null} 
              onSelect={setSelectedQuestionId} 
             />
          </div>

          <div className="flex-1 p-8 overflow-y-auto bg-white">
            {activeQuestion ? (
              <div id="content-container">
                <button 
                  onClick={() => setSelectedQuestionId(null)}
                  className="mb-4 bg-red-600 text-white font-bold px-4 py-2 border-4 border-black hover:bg-black"
                >
                  [ GO BACK TO QUESTION LIST ]
                </button>
                <QuestionDisplay question={activeQuestion} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-yellow-200 border-8 border-double border-red-600">
                <h3 className="text-6xl font-bold text-red-600 mb-6 drop-shadow-lg">!!! CHOOSE A QUESTION !!!</h3>
                <p className="text-2xl font-bold underline text-blue-800">
                  CLICK ONE OF THE BUTTONS ON THE LEFT SIDE TO START LEARNING!
                </p>
                <div className="mt-8 text-4xl animate-bounce">
                  ⬅️ ⬅️ ⬅️
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
