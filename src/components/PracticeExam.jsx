import React, { useState } from 'react';
import { practiceExam } from '../data';
import { Eye, EyeOff } from 'lucide-react';

function ExamQuestion({ item, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="glass-panel" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', flex: 1, paddingRight: '1rem' }}>
          {item.question}
        </h3>
        <span style={{ color: 'var(--secondary)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          ({item.marks} marks)
        </span>
      </div>
      
      <button 
        className="tab-btn" 
        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginBottom: showAnswer ? '1rem' : '0' }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? <><EyeOff size={16} /> Hide Answer</> : <><Eye size={16} /> Show Answer</>}
      </button>

      {showAnswer && (
        <div className="animate-in" style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', borderRadius: '4px' }}>
          <p style={{ color: '#10b981', margin: 0 }}><strong>Answer:</strong> {item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PracticeExam() {
  return (
    <div className="animate-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Previous Exam Questions</h2>
        <p style={{ color: 'var(--text-muted)' }}>Test yourself using real past paper questions. Try to answer before revealing the solution!</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {practiceExam.map((item, index) => (
          <ExamQuestion key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
