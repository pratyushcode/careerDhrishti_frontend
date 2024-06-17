import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Question=({status,onQuitQuiz,onOptionClick})=> {

        const[optionChosen,setOptionChosen]=useState("");
    
        const handleOptionChosen=(option)=>{
            setOptionChosen(option);
            console.log(optionChosen);
        }
        const handleButtonClick=(event)=>{

            event.preventDefault();
            const temp=optionChosen;
            {optionChosen!=""&&onOptionClick(temp)}
            setOptionChosen("");
        }
        const item=status.eachQuestion;
        const sections=["Numerical Aptitude","Analytical Aptitude","Verbal Aptitude","Interpersonal Aptitude"];

  return (
    <>

    <div className="w-full mt-10">
        <div className="bg-gray-100 text-black w-full">
          <div className='flex justify-center'>
            <div className=" p-6 w-3/4">
                <div className='flex justify-center'>
                    <div className='w-1/3 mb-7 border border-slate-300 p-1 transform hover:scale-105 transition-colors shadow-xl rounded-lg bg-white'>
                        <div>Section : {sections[status.sectionIndex]}</div>
                        <div>Question : {status.quesIndex+1} /5</div>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4">{item.question}</h2>
                
                  
                <div className="grid grid-cols-1 gap-4">{item.options.map((option,index,id)=>(
                    <div>
                        <input
                            className='hidden'
                            type="radio"
                            key={option}
                            id={`option-${index}`}
                            name="options"
                            onChange={() => handleOptionChosen(option)}
                        />
                        <label
                           className={`block ${optionChosen==option ? "bg-blue-700 text-white" : "bg-white"} rounded-lg p-4 shadow-md cursor-pointer transition-colors hover:bg-blue-700 hover:text-white transform hover:scale-105`}
                            htmlFor={`option-${index}`}
                        >
                            {option}
                        </label>
                    </div>    
                ))}</div>

                <div className="flex justify-center gap-5 mt-10">
                <button
                  onClick={onQuitQuiz}
                  className="block w-1/4 rounded-md border border-stroke p-3 text-center text-base font-medium text-black transition hover:border-red-600 hover:bg-red-600 hover:text-white bg-slate-300"
                >
                  Quit Quiz
                </button>
                    <button onClick={(event)=>handleButtonClick(event)} className={`block w-1/4 rounded-lg border border-primary ${optionChosen!="" ? "bg-blue-700" : "bg-blue-500"} p-3 text-center text-base font-medium text-white  hover:bg-blue-700`}>
                    Submit Answer
                    </button>
                </div>
              
            </div>
          </div>
        </div>
    </div>



    </>

  )
}

export default Question

