import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([ { text:"hi", isUser: true },
    { text: "hello how can i assit you", isUser: false }]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    const userMessage = userInput;
    setUserInput(''); // Clear input field
    setIsLoading(true); // Show loader

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCri8EdszFVTy1HJChKdVX-RxoWuDm4q5c",
        method: "post",
        data: {
          contents: [{ parts: [{ text: userInput }] }],
        },
      });

      const botMessage = response.data.candidates[0].content.parts[0].text;

      // Add user and bot messages to the chat history
      setChatHistory(prevHistory => [
        ...prevHistory,
        { text: userMessage, isUser: true },
        { text: botMessage, isUser: false }
      ]);

      setIsLoading(false); // Hide loader
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully, e.g., display an error message to the user
      setIsLoading(false); // Hide loader on error
    }
  };

  return (
    <div id="chat-container" className='w-[350px] flex-col justify-center item-center border-2 border-blue-400 rounded-md'>
      <h1 className='text-center text-xl bg-slate-50'>CarrerDrishti.ai</h1>
      <div id="chat-history" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px', position: 'relative' }}>
        {/* Display chat messages */}
        {chatHistory.map((message, index) => (
          <div key={index} className="  boder-2 border-black"style={{ padding: '10px', textAlign: message.isUser ? 'right' : 'left', background:message.isUser ? 'lightblue' : 'white',margin:'' }}>
          
            <ReactMarkdown className="p-3">{message.text.split(' ').slice(0, 100).join(' ')}</ReactMarkdown>
          </div>
        ))}
        {/* Loader */}
        {isLoading && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
   
     <div > <form id="chat-form"  className='flex-row justify-between items-center gap-5   mb-2' onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
        <input type="text" className='mx-2' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your message" style={{ marginRight: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <button type="submit"  className="mx-7"style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
          {isLoading ? 'Sending.' : 'Send'}
        </button>
      </form></div>
     
      
    </div>
  );
}

export default Chatbot;
