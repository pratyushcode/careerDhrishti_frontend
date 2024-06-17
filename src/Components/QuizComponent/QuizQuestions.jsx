import React, { useState,useEffect } from 'react'
import queries from "../../../qstn[1].json"
import QuizResult from '../../Pages/QuizResult';
import Question from './Question';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const QuizQuestions = ({onQuitQuiz}) => {

  const sections=["numerical_aptitude","analytical_aptitude","verbal_aptitude","interpersonal_aptitude"];
  const [status,setStatus]=useState({
    sectionIndex :0,
    questionSetIndex :0,
    sectionScore:0,
    globalScore:[],
    quesIndex:-1,
    eachQuestion:{},
    questionSet:[]
  })
  const navigate=useNavigate();
  if(status.sectionIndex<4&&status.quesIndex==-1)
  {
    const sectionName=sections[status.sectionIndex];
    const temp=Math.floor(Math.random()*queries[sectionName].length);
    const quesSet=queries[sectionName][temp].questions;
    const currQuestion=quesSet[0];
    setStatus(status=>({...status,eachQuestion:currQuestion,quesIndex:0,questionSet:quesSet,questionSetIndex:temp}))
  }
  if(status.quesIndex===5)
  {
    let currSectionIndex=status.sectionIndex;
    let currSectionScore=status.sectionScore;
    let currQuestionIndex=status.quesIndex;
    let currQuestion=status.eachQuestion;
    const currGlobalScore=[...status.globalScore,currSectionScore];
    currSectionScore=0;
    currSectionIndex=currSectionIndex+1;
    currQuestionIndex=0;
    currQuestion=status.questionSet[currQuestionIndex];
     setStatus(status=>({...status, sectionIndex:currSectionIndex,globalScore:currGlobalScore,sectionScore:0,quesIndex:-1,eachQuestion:currQuestion}))
    console.log("Section Complete",status);
  }

  const handleOptionClick=(option)=>{
    let currScore=status.sectionScore;
    console.log(option,status.questionSet[status.quesIndex].answer);
    if(status.questionSet[status.quesIndex].answer===option)
    {
      currScore++;
    }

    let currQuestionIndex=status.quesIndex;
    currQuestionIndex++;
    let currQuestion=status.eachQuestion;
    if(currQuestionIndex!=10)
    currQuestion=status.questionSet[currQuestionIndex];
    setStatus(status=>({...status,eachQuestion:currQuestion,quesIndex:currQuestionIndex,sectionScore:currScore}));
  }

  const handleResultButtonClick=()=>{
    navigate('/quizresult',{state:{status}});
  }

  return (
    <>
    {
      (status.sectionIndex<4) ? 
      <Question status={status} onQuitQuiz={onQuitQuiz} onOptionClick={handleOptionClick}/>
       : <div>


<div className="container mx-auto py-20">
        <div
          className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-stone-900 px-4 py-5"
        >
          <div
            className="w-full max-w-[570px] rounded-[20px] border-red-500 bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-black sm:text-2xl">
            Congratulations, you have Successfully completed the quiz
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-blue-500`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            ------------Click on the button to view results-----------
            </p>
            <div className="flex justify-center mt-10">
              
                <button onClick={handleResultButtonClick}  className="block w-1/2 rounded-lg border border-primary bg-blue-500 p-3 text-center text-base font-medium text-white  hover:bg-blue-700">
                  View Results
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    }
    </>
  )
}

export default QuizQuestions
