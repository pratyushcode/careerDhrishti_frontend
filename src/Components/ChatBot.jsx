import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    { text: "hi", isUser: true },
    { text: "hello how can i assist you", isUser: false }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef = useRef(null);

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

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);

  return (
    <div id="chat-container" className='w-[350px] flex-col justify-center item-center border-2 border-[#3758f9] rounded-md '>
      <h1 className='text-center text-xl bg-slate-50 ' style={{ color: '#3758f9' }}>CareerDrishti.ai</h1>
      <div
        id="chat-history"
        ref={chatHistoryRef}
        style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px', position: 'relative' }}
      >
        {/* Display chat messages */}
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-center mb-2`}
          >
            {!message.isUser && (
              <div className="flex-shrink-0">
                <i className="fas fa-robot fa-2x text-primary ml-2" style={{ marginRight: '10px' }}></i>
              </div>
            )}
            <div
              style={{
                background: message.isUser ? '#d0eaff' : '#d3d3d3',
                color: message.isUser ? 'black' : 'black',
                padding: '10px 15px', 
                borderRadius: '15px',
                maxWidth: '70%',
                wordBreak: 'break-word'
              }}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
            {message.isUser && (
              <div className="flex-shrink-0">
                <i className="fas fa-user fa-2x text-primary mr-2" style={{ marginLeft: '10px' }}></i>
              </div>
            )}
          </div>
        ))}
        {/* Typing indicator */}
        {isLoading && (
          <div className="text-gray-500" style={{ padding: '10px', textAlign: 'right', fontStyle: 'italic' }}>
            Typing...
          </div>
        )}
      </div>

      <div>
        <form
          id="chat-form"
          className='flex-row justify-between items-center gap-5 mb-2'
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <input
            type="text"
            className='mx-2'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your message"
            style={{ marginRight: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '65%' }}
          />
          <button
            type="submit"
            className="mx-2"
            style={{
              backgroundColor: isLoading ? 'lightgray' : '#3758f9',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
