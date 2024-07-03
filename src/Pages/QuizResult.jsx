import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const QuizResult = () => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const sections = ["Numerical Aptitude", "Analytical Aptitude", "Verbal Aptitude", "Interpersonal Aptitude"];

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
    console.log("result",name);
    
  }, []);

  useEffect(() => {
    if (userName) {
      const fetchUserId = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users?name=${userName}`);
          setUserId(response.data.userId);
          console.log("result",userId)
        } catch (error) {
          console.error('Failed to fetch user ID', error);
        }
      };
      fetchUserId();
    }
  }, [userName]);

  let status = location.state ? location.state.status : null;

  useEffect(() => {
    if (status) {
      const resultData = {
        userId,
        numericalAptitude: (status.globalScore[0] * 100) / 5,
        analyticalAptitude: (status.globalScore[1] * 100) / 5,
        verbalAptitude: (status.globalScore[2] * 100) / 5,
        interpersonalAptitude: (status.globalScore[3] * 100) / 5,
      };
      console.log("result",resultData);

      const submitResults = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/quiz-results', resultData);
          console.log(response);
          setMessage('Quiz results submitted successfully!');
        } catch (error) {
          setMessage('Failed to submit quiz results.');
          console.error('There was an error submitting the quiz results!', error);
        }
      };
      
      submitResults();
    }
  }, [status, userId]);

  const handleCounsellingButtonClick = () => {
    navigate('/expert');
  };

  const handleChatbotButtonClick = () => {
    window.location.href = 'https://wjcw78ls-8501.inc1.devtunnels.ms';
  };

  return (
    <>
      {status ? (
        <div className='w-full'>
          <section className="py-10 bg-gray-100 mt-10">
            <div className='w-full flex justify-center items-center flex-col'>
              <div className='pb-5 text-2xl font-bold'>Quiz Result</div>
              <span className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-blue-700`}></span>
            </div>
            <div className='w-full flex flex-col items-center'>
              {sections.map((item, index) => (
                <div key={index} className='flex justify-center gap-5 w-full'>
                  <div className='mb-3 w-[150px] flex '>{sections[index]}</div>
                  <div className='mb-8 w-1/4 '>
                    <div className='bg-slate-300 dark:bg-dark-3 relative h-4 w-full rounded-2xl'>
                      <div
                        style={{ width: `${((status.globalScore[index] * 100) / 5)}%` }}
                        className={`bg-blue-700 pl-3 absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white`}
                      >
                        {((status.globalScore[index] * 100) / 5)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container mx-auto mt-5">
              <div className="relative z-10 overflow-hidden rounded bg-blue-700 py-12 px-8 md:p-[70px]">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4 lg:w-1/2">
                    <span className="block mb-4 text-base font-medium text-white">Next Steps</span>
                    <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                      <span className="xs:block">Get expert guidance</span>
                      <span> and detailed career paths</span>
                    </h2>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="flex flex-wrap lg:justify-end">
                      <button
                        onClick={handleCounsellingButtonClick}
                        className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7 hover:bg-opacity-90"
                      >
                        Talk To Career Counsellor
                      </button>
                      <button
                        onClick={handleChatbotButtonClick}
                        className="inline-flex py-3 my-1 text-base font-medium text-black transition rounded-md bg-white px-7 hover:bg-opacity-90"
                      >
                        Talk To AI Chatbot
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="absolute top-0 left-0 z-[-1]">
                    <svg
                      width="189"
                      height="162"
                      viewBox="0 0 189 162"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="16"
                        cy="-16.5"
                        rx="173"
                        ry="178.5"
                        transform="rotate(180 16 -16.5)"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-157"
                          y1="-107.754"
                          x2="98.5011"
                          y2="-106.425"
                          gradientUnits="userSpaceOnUse"
                        ></linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                      width="191"
                      height="208"
                      viewBox="0 0 191 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="173"
                        cy="178.5"
                        rx="173"
                        ry="178.5"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="0"
                          y1="87.2457"
                          x2="255.501"
                          y2="88.5747"
                          gradientUnits="userSpaceOnUse"
                        ></linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section className="relative z-10 bg-blue-700 py-[120px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex">
                <div className="w-full px-4">
                  <div className="mx-auto max-w-[400px] text-center">
                    <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">Oops !</h2>
                    <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">You haven't attended the quiz yet</h4>
                    <p className="mb-8 text-lg text-white">Click on the button to attend Quiz</p>
                    <button
                      onClick={() => navigate('/quiz')}
                      className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
                    >
                      Go To Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
              <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
              <div className="flex h-full w-1/3">
                <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
              </div>
              <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default QuizResult;
