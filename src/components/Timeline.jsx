import React from 'react';
import { timelineEvents } from '../data';

export default function Timeline() {
  return (
    <div className="timeline-container animate-in">
      {timelineEvents.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content glass-panel">
            <span className="timeline-date">{event.year}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
