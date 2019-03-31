import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div
      className="progress"
      role="progressbar"
      tabIndex="0"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuetext="50 percent"
      aria-valuemax="100"
    >
      <div
        className="progress-meter"
        style={{ width: `${progress}%`, transition: 'width 1s' }}
      />
    </div>
  );
};

export default Progress;
