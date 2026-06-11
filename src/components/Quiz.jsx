import React, { useState } from 'react';
import { quizQuestions } from '../data';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);

    if (index === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  if (showScore) {
    return (
      <div className="glass-panel quiz-container quiz-result animate-in">
        <h2>Quiz Completed!</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          You scored {score} out of {quizQuestions.length}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          {score === quizQuestions.length ? (
             <CheckCircle2 size={80} color="#10b981" />
          ) : (
             <CheckCircle2 size={80} color="var(--primary)" />
          )}
        </div>
        <button className="quiz-btn" onClick={restartQuiz}>Retake Quiz</button>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="glass-panel quiz-container animate-in">
      <div style={{ textAlign: 'right', marginBottom: '1rem', color: 'var(--text-muted)' }}>
        Question {currentQuestion + 1} / {quizQuestions.length}
      </div>
      <h3 className="quiz-question">{question.question}</h3>
      <div className="quiz-options">
        {question.options.map((option, index) => {
          let className = "quiz-option";
          if (selectedOption !== null) {
            if (index === question.answer) {
              className += " correct";
            } else if (index === selectedOption) {
              className += " incorrect";
            }
          }

          return (
            <button 
              key={index} 
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
