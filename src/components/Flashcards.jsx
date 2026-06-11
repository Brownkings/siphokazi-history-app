import React, { useState } from 'react';
import { flashcards } from '../data';

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flashcard ${flipped ? 'flipped' : ''}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>{card.term}</h3>
          <p>Click to reveal</p>
        </div>
        <div className="flashcard-back">
          <p>{card.definition}</p>
        </div>
      </div>
    </div>
  );
}

export default function Flashcards() {
  return (
    <div className="flashcards-container animate-in">
      {flashcards.map((card, index) => (
        <Flashcard key={index} card={card} />
      ))}
    </div>
  );
}
