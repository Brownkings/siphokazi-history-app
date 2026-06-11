import React, { useState } from 'react';
import { BookOpen, Clock, Lightbulb, FileText } from 'lucide-react';
import Timeline from './components/Timeline';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import PracticeExam from './components/PracticeExam';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <div className="app-container">
      <header className="header animate-in">
        <h1>Siphokazi's History Hub</h1>
        <p>Grade 9 June Exam Study Guide</p>
      </header>

      <div className="tabs animate-in" style={{ animationDelay: '0.2s' }}>
        <button 
          className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          <Clock size={20} />
          Timeline
        </button>
        <button 
          className={`tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          <Lightbulb size={20} />
          Flashcards
        </button>
        <button 
          className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <BookOpen size={20} />
          Knowledge Check
        </button>
        <button 
          className={`tab-btn ${activeTab === 'exam' ? 'active' : ''}`}
          onClick={() => setActiveTab('exam')}
        >
          <FileText size={20} />
          Practice Exam
        </button>
      </div>

      <main className="content-area">
        {activeTab === 'timeline' && <Timeline />}
        {activeTab === 'flashcards' && <Flashcards />}
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'exam' && <PracticeExam />}
      </main>
    </div>
  );
}

export default App;
