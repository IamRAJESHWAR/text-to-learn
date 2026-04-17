import React from 'react';

const MCQBlock = ({ question, options, answer }) => (
  <div style={{ margin: '1em 0' }}>
    <strong>{question}</strong>
    <ul>
      {options.map((opt, idx) => (
        <li key={idx} style={{ color: idx === answer ? 'green' : 'inherit' }}>{opt}</li>
      ))}
    </ul>
  </div>
);

export default MCQBlock;
