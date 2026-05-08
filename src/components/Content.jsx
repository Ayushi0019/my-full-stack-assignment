import { useState } from 'react';

export function QuestionDisplay({ question }) {
  return (
    <div className="space-y-4 p-4 border-4 border-double border-black bg-white">
      <h2 className="text-4xl font-bold text-red-600 uppercase italic">
        Topic: {question.title}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="font-bold text-blue-700">CODE AREA (INPUT):</h3>
          <div className="bg-gray-100 border-2 border-black p-4 font-mono text-xs whitespace-pre overflow-auto">
            {question.code}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-green-700">OUTPUT AREA:</h3>
          <div className="bg-white border-4 border-black p-4 min-h-[100px]">
             <div 
               className="w-full h-full border-2 border-dotted border-gray-400 p-2"
               dangerouslySetInnerHTML={{ __html: question.output }}
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuestionList({ questions, selectedId, onSelect }) {
  return (
    <div id="question-list" className="space-y-2">
      {questions.map((q) => (
        <button
          key={q.id}
          onClick={() => onSelect(q.id)}
          className={`w-full text-left p-2 font-bold border-2 ${
            selectedId === q.id
            ? 'bg-blue-600 text-white border-black'
            : 'bg-white text-black border-gray-300 hover:border-black'
          }`}
        >
          {q.id === selectedId ? "=> " : ""}{q.title}
        </button>
      ))}
    </div>
  );
}
