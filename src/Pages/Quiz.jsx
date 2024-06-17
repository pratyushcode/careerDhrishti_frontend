import React, { useEffect } from 'react'
import { useState } from 'react'
import WelcomeQuiz from '../Components/QuizComponent/WelcomeQuiz.jsx'
import QuizProgress from '../Components/QuizComponent/QuizProgress.jsx'

const Quiz = () => {


  const [welcome,setWelcome]=useState(true);
  const [progress,setProgress]=useState(false);


  const handleWelcomeChange=()=>{
    setWelcome(false);
    setProgress(true);
  }
  const handleBackToWelcome=()=>{
    setWelcome(true);
    setProgress(false);
  }
  return (
    <div>
      {welcome&&<WelcomeQuiz welcome onWelcomeChange={handleWelcomeChange}/>}
      {progress&&<QuizProgress onBackToWelcome={handleBackToWelcome}/>}
    </div>
  )
}

export default Quiz