import React from 'react'
import "./progressBar.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

const now = 60;

const Progress = () => {
  return (
    <div className="progress-bar">
      <ProgressBar now={now} label={`${now}%`} visuallyHidden />

    </div>
  )

  
}




export default Progress;
