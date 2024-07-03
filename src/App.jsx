import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './Pages/About'
import Home from './Pages/Home'
import Appointment from './Pages/Appointment'
import Portfolio from './Pages/Portfolio'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Blog from './Pages/Blog'
import Quiz from './Pages/Quiz'
import QuizResult from './Pages/QuizResult'
import Chatbot from './Components/ChatBot'
import Signup from './Pages/Auth/signup'
import Signin from './Pages/Auth/signin'
import Dashboard from './Pages/profile/MyProfile'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <div className="relative">
      {/* Round button */}
      <button
        className="fixed bottom-5 right-5 w-20 h-20 text-sm bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md z-20"
        onClick={openModal}
      >
        Talk to ChatBot
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bottom-5 right-5 bg-white p-1 rounded-lg shadow-md z-20">
          <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> 
          
          <Chatbot/>
         
        </div>
      )}
    </div>

    <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/expert" element={<Appointment/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Resources" element={<Portfolio/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Quiz" element={<Quiz/>}></Route>
          <Route path="/QuizResult" element={<QuizResult/>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          

        </Routes>
      </Router>
      
    </>
  )
}

export default App
