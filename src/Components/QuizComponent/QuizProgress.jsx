import React, { useState } from 'react'
import QuizQuestions from './QuizQuestions'

const QuizProgress = ({onBackToWelcome}) => {

  const[quizStart,setQuizStart]=useState(false);
  const handleStartQuiz=()=>{
    setQuizStart(true);
  }
  return (


  <>
  {quizStart ? <QuizQuestions onQuitQuiz={onBackToWelcome}/> : 
  <div>
        <section class="text-gray-600 body-font">
      <div class="container py-10 w-full">
        <div class="flex flex-wrap gap-5 justify-center">
          <div class="p-4 lg:w-1/3">
            <div class=" bg-gray-100 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SECTION 1/4</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Numerical Aptitude</h1>
              <span
                  className={`mx-auto mb-6 inline-block h-[0.2px] w-[90px] rounded bg-blue-700`}
                ></span>
              <p class="leading-relaxed mb-3">Numerical Aptitude assesses an individual's ability to understand and work with numbers, including basic arithmetic, numerical reasoning, and problem-solving skills.</p>
              <a class="text-blue-500 inline-flex items-center" href="https://mettl.com/glossary/n/numerical-aptitude/#:~:text=Numerical%20aptitude%20defines%20an%20individual's,data%20with%20the%20utmost%20ease.">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class=" bg-gray-100 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SECTION 2/4</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Analytical Aptitude</h1>
              <span
                  className={`mx-auto mb-6 inline-block h-[0.2px] w-[90px] rounded bg-blue-700`}
                ></span>
              <p class="leading-relaxed mb-3">
    Analytical Aptitude evaluates an individual's capacity to comprehend complex situations, break them down into smaller components, and derive logical conclusions or solutions.</p>
              <a class="text-blue-500 inline-flex items-center" href="https://www.indeed.com/career-advice/career-development/analytical-reasoning">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class=" bg-gray-100 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SECTION 3/4</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Verbal Aptitude</h1>
              <span
                  className={`mx-auto mb-6 inline-block h-[0.2px] w-[90px] rounded bg-blue-700`}
                ></span>
              <p class="leading-relaxed mb-3">Verbal Aptitude assesses an individual's proficiency in understanding and interpreting written and spoken language, including vocabulary, grammar, and comprehension.</p>
              <a class="text-blue-500 inline-flex items-center" href="https://www.meritstore.in/blog/what-is-verbal-aptitude/">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class=" bg-gray-100 bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SECTION 4/4</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Interpersonal Aptitude</h1>
              <span
                  className={`mx-auto mb-6 inline-block h-[0.2px] w-[90px] rounded bg-blue-700`}
                ></span>
              <p class="leading-relaxed mb-3">Interpersonal Aptitude evaluates an individual's ability to interact effectively with others, demonstrating empathy, communication skills, and the capacity for collaboration and teamwork.</p>
              <a class="text-blue-500 inline-flex items-center" href="https://www.simplilearn.com/interpersonal-skills-definitions-examples-article">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='flex justify-center w-full pb-10'>
      <div className="w-1/4 px-3">
        <button onClick={onBackToWelcome} className="block w-full rounded-md border border-primary bg-blue-700 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
          Read Instructions
        </button>
      </div>
      <div className="w-1/4 px-3">
      <button onClick={handleStartQuiz} className="block w-full rounded-md border border-primary bg-blue-700 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
        Start Quiz
      </button>
    </div>
    </div>
  </div>
}
</>
  )
}

export default QuizProgress