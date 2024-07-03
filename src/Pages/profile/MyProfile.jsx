import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ProfileComponent from './ProfileComponent';

const MyMentor = () => {
  const [quizResults, setQuizResults] = useState([]);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState('');
  const [lastQuiz,setLastQuiz]=useState('')

  const handleCounsellingButtonClick = () => {
    navigate('/expert');
  };

  const handleChatbotButtonClick = () => {
    window.location.href = 'https://wjcw78ls-8501.inc1.devtunnels.ms';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const name = localStorage.getItem('userName');
        setUserName(name);

        // Fetch userId based on userName
        if (name) {
          const response = await axios.get(`http://localhost:5000/api/users?name=${name}`);
          setUserId(response.data.userId);
        }

        // Fetch quiz results based on userId
        if (userId) {
          const resultsResponse = await axios.get(`http://localhost:5000/api/quiz-results/${userId}`);
          setQuizResults(resultsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]); // Fetch data when userId changes

  useEffect(() => {
    // Create doughnut charts once quizResults are fetched
    if (quizResults.length > 0) {
      quizResults.forEach((result, index) => createDoughnutChart(result, index));
    }
  }, [quizResults]);

  const createDoughnutChart = (result, index) => {
    const ctx = document.getElementById(`doughnutChart${index}`);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Numerical', 'Analytical', 'Verbal', 'Interpersonal'],
        datasets: [
          {
            data: [
              result.numericalAptitude,
              result.analyticalAptitude,
              result.verbalAptitude,
              result.interpersonalAptitude,
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: '70%', // Size of the hole in the middle
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: false,
          },
          beforeDraw: (chart) => {
            const { width } = chart;
            const ctx = chart.ctx;
            ctx.restore();
            const fontSize = (width / 100).toFixed(2);
            ctx.font = `${fontSize}em sans-serif`;
            ctx.textBaseline = 'middle';
            const text = `${result.percentage}%`;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = chart.height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      },
    });
  };

  const calculateAverages = () => {
    const totalResults = quizResults.length;
    const averages = {
      numericalAptitude: 0,
      analyticalAptitude: 0,
      verbalAptitude: 0,
      interpersonalAptitude: 0,
    };

    quizResults.forEach((result) => {
      averages.numericalAptitude += result.numericalAptitude;
      averages.analyticalAptitude += result.analyticalAptitude;
      averages.verbalAptitude += result.verbalAptitude;
      averages.interpersonalAptitude += result.interpersonalAptitude;
    });

    averages.numericalAptitude /= totalResults;
    averages.analyticalAptitude /= totalResults;
    averages.verbalAptitude /= totalResults;
    averages.interpersonalAptitude /= totalResults;

    return averages;
  };

  const createBarChart = () => {
    const averages = calculateAverages();
    const ctx = document.getElementById('barChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Numerical', 'Analytical', 'Verbal', 'Interpersonal'],
        datasets: [
          {
            label: 'Average Scores',
            data: [
              averages.numericalAptitude,
              averages.analyticalAptitude,
              averages.verbalAptitude,
              averages.interpersonalAptitude,
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (quizResults.length > 0) {
      createBarChart();
    }
  }, [quizResults]);

  console.log(lastQuiz);

  return (
    <>
      
      <Navbar />
      <div className='mx-10'>
      <ProfileComponent userId={userId}/>
      </div>
      
      <div className="container mx-auto mt-10 bg-slate-100 rounded-lg">
        <h1 className="text-3xl font-bold mb-5 text-center  ">Quiz Results Dashboard</h1>
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex justify-evenly items-center flex-grow">
          {quizResults.map((result, index) => (
            <div key={result._id} className="relative bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
              <h2 className="text-center text-xl font-bold mb-4 ">{`Career Analysis for 8th, 9th & 10th Class`}</h2>
              <p className="text-center mb-4">{new Date(result.createdAt).toLocaleDateString()}</p>
             
              <div className="w-40 h-40 mb-4 relative">
                <canvas id={`doughnutChart${index}`} width="160" height="160"></canvas>
              </div>
              <h3 className="text-center text-3xl font-bold mb-4">{`${((result.numericalAptitude + result.analyticalAptitude + result.verbalAptitude + result.interpersonalAptitude) / 4).toFixed(2)}%`}</h3>
              <div className="text-left">
              <p style={{ color: 'rgba(54, 162, 235, 1)' }}>Numerical Aptitude: {result.numericalAptitude}/30</p>
                <p style={{ color: 'rgba(255, 99, 132, 1)' }}>Analytical Aptitude: {result.analyticalAptitude}/35</p>
                <p style={{ color: 'rgba(255, 206, 86, 1)' }}>Verbal Aptitude: {result.verbalAptitude}/25</p>
                <p style={{ color: 'rgba(75, 192, 192, 1)' }}>Interpersonal Aptitude: {result.interpersonalAptitude}/10</p>
              
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <canvas id="barChart" width="400" height="200"></canvas>
        </div>
      </div>
      <div className="container mx-auto mt-5 pb-6">
        <div className="relative z-10 overflow-hidden rounded bg-blue-700 py-12 px-8 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
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
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.08" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute top-0 right-0 z-[-1]">
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
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.08" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const calculateAverage = (result) => {
  const total = result.numericalAptitude + result.analyticalAptitude + result.verbalAptitude + result.interpersonalAptitude;
  return (total / 4).toFixed(2);
};

export default MyMentor;
